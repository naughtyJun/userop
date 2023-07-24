import { BigNumberish, BytesLike, ethers } from "ethers";
import { ERC4337 } from "../../constants";
import { UserOperationBuilder } from "../../builder";
import { BundlerJsonRpcProvider } from "../../provider";
import {
  EOASignature,
  estimateUserOperationGas,
  getGasPrice,
} from "../middleware";
import {
  EntryPoint,
  EntryPoint__factory,
  TestAccountFactory,
  TestAccountFactory__factory,
  TestAccount as TestAccountImpl,
  TestAccount__factory,
} from "../../typechain";
import { IPresetBuilderOpts, UserOperationMiddlewareFn } from "../../types";

export class TestAccount extends UserOperationBuilder {
  private signer: ethers.Signer;
  private customerNo: string;
  private provider: ethers.providers.JsonRpcProvider;
  private entryPoint: EntryPoint;
  private factory: TestAccountFactory;
  private initCode: string;
  proxy: TestAccountImpl;

  private constructor(
    signer: ethers.Signer,
    customerNo: string,
    rpcUrl: string,
    opts?: IPresetBuilderOpts
  ) {
    super();
    this.customerNo = customerNo;
    this.signer = signer;
    this.provider = new BundlerJsonRpcProvider(rpcUrl).setBundlerRpc(
      opts?.overrideBundlerRpc
    );
    this.entryPoint = EntryPoint__factory.connect(
      opts?.entryPoint || ERC4337.EntryPoint,
      this.provider
    );
    this.factory = TestAccountFactory__factory.connect(
      opts?.factory || "",
      this.provider
    );
    this.initCode = "0x";
    this.proxy = TestAccount__factory.connect(
      ethers.constants.AddressZero,
      this.provider
    );
  }

  private resolveAccount: UserOperationMiddlewareFn = async (ctx) => {
    ctx.op.nonce = await this.entryPoint.getNonce(ctx.op.sender, 0);
    ctx.op.initCode = ctx.op.nonce.eq(0) ? this.initCode : "0x";
  };

  public static async init(
    signer: ethers.Signer,
    customerNo: string,
    rpcUrl: string,
    opts?: IPresetBuilderOpts
  ): Promise<TestAccount> {
    const instance = new TestAccount(signer, customerNo, rpcUrl, opts);

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

      instance.proxy = TestAccount__factory.connect(addr, instance.provider);
    }

    const base = instance
      .useDefaults({
        sender: instance.proxy.address,
        signature: await instance.signer.signMessage(
          ethers.utils.arrayify(ethers.utils.keccak256("0xdead"))
        ),
      })
      .useMiddleware(instance.resolveAccount)
      .useMiddleware(getGasPrice(instance.provider));

    const withPM = opts?.paymasterMiddleware
      ? base.useMiddleware(opts.paymasterMiddleware)
      : base.useMiddleware(estimateUserOperationGas(instance.provider));

    return withPM.useMiddleware(EOASignature(instance.signer));
  }

  execute(to: string, value: BigNumberish, data: BytesLike) {
    return this.setCallData(
      this.proxy.interface.encodeFunctionData("execute", [to, value, data])
    );
  }

  executeBatch(to: Array<string>, data: Array<BytesLike>) {
    return this.setCallData(
      this.proxy.interface.encodeFunctionData("executeBatch", [to, data])
    );
  }
}
