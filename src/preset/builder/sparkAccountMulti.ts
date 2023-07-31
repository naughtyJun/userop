import {BigNumberish, BytesLike, ethers} from "ethers";
import {ERC4337} from "../../constants";
import {UserOperationBuilder} from "../../builder";
import {BundlerJsonRpcProvider} from "../../provider";
import {
  EOASignature,
  estimateUserOperationGas, estimateUserOperationGasMulti,
  getGasPrice,
} from "../middleware";
import {
  EntryPoint,
  EntryPoint__factory,
  SparkAccountMultiFactory,
  SparkAccountMultiFactory__factory,
  SparkAccountMulti as SparkAccountImpl,
  SparkAccountMulti__factory,
} from "../../typechain";
import {IPresetBuilderOpts, UserOperationMiddlewareFn} from "../../types";
import {EOASignatureMulti} from "../middleware/signatureMulti";

export class SparkAccountMulti extends UserOperationBuilder {
  private signers: ethers.Signer[];
  private customerNo: string;
  private provider: ethers.providers.JsonRpcProvider;
  private entryPoint: EntryPoint;
  private factory: SparkAccountMultiFactory;
  private initCode: string;
  proxy: SparkAccountImpl;

  private constructor(
    signer: ethers.Signer[],
    customerNo: string,
    rpcUrl: string,
    opts?: IPresetBuilderOpts
  ) {
    super();
    this.customerNo = customerNo;
    this.signers = signer;
    this.provider = new BundlerJsonRpcProvider(rpcUrl).setBundlerRpc(
      opts?.overrideBundlerRpc
    );
    this.entryPoint = EntryPoint__factory.connect(
      opts?.entryPoint || ERC4337.EntryPoint,
      this.provider
    );
    this.factory = SparkAccountMultiFactory__factory.connect(
      opts?.factory || "",
      this.provider
    );
    this.initCode = "0x";
    this.proxy = SparkAccountMulti__factory.connect(
      ethers.constants.AddressZero,
      this.provider
    );
  }

  private resolveAccount: UserOperationMiddlewareFn = async (ctx) => {
    ctx.op.nonce = await this.entryPoint.getNonce(ctx.op.sender, 0);
    ctx.op.initCode = ctx.op.nonce.eq(0) ? this.initCode : "0x";
  };

  public static async init(
    signer: ethers.Signer[],
    customerNo: string,
    rpcUrl: string,
    opts?: IPresetBuilderOpts
  ): Promise<SparkAccountMulti> {
    const instance = new SparkAccountMulti(signer, customerNo, rpcUrl, opts);

    try {
      instance.initCode = await ethers.utils.hexConcat([
        instance.factory.address,
        instance.factory.interface.encodeFunctionData("createAccount", [
          instance.customerNo,
          ethers.BigNumber.from(0),
        ]),
      ]);
      await instance.entryPoint.callStatic.getSenderAddress(instance.initCode);

      throw new Error("getSenderAddress: unexpected result");
    } catch (error: any) {
      const addr = error?.errorArgs?.sender;
      if (!addr) throw error;

      instance.proxy = SparkAccountMulti__factory.connect(addr, instance.provider);
    }

    let signature = "0x";
    for (const s of instance.signers) {
      const oneSignature = await s.signMessage(
        ethers.utils.arrayify(ethers.utils.keccak256("0xdead"))
      );
      signature = signature.concat(oneSignature.slice(2));
    }

    const base = instance;
    base.useDefaults({
      sender: instance.proxy.address,
      signature: signature,
    })
      .useMiddleware(instance.resolveAccount)
      .useMiddleware(getGasPrice(instance.provider));

    const withPM = opts?.paymasterMiddleware
      ? base.useMiddleware(opts.paymasterMiddleware)
      : base.useMiddleware(estimateUserOperationGasMulti(instance.provider));

    return withPM.useMiddleware(EOASignatureMulti(instance.signers));
  }

  execute(to: string, value: BigNumberish, data: BytesLike) {
    return this.setCallData(
      this.proxy.interface.encodeFunctionData("execute", [to, value, data])
    );
  }

  executeBatch(to: Array<string>, value: Array<BigNumberish>, data: Array<BytesLike>) {
    return this.setCallData(
      this.proxy.interface.encodeFunctionData("executeBatch", [to, value, data])
    );
  }
}
