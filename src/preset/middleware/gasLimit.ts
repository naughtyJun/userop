import {BigNumberish, BytesLike, ethers} from "ethers";
import {OpToJSON} from "../../utils";
import {UserOperationMiddlewareFn} from "../../types";

interface GasEstimate {
  preVerificationGas: BigNumberish;
  verificationGas: BigNumberish;
  verificationGasLimit: BigNumberish;
  callGasLimit: BigNumberish;
}

const estimateCreationGas = async (
  provider: ethers.providers.JsonRpcProvider,
  initCode: BytesLike
): Promise<ethers.BigNumber> => {
  const initCodeHex = ethers.utils.hexlify(initCode);
  const factory = initCodeHex.substring(0, 42);
  const callData = "0x" + initCodeHex.substring(42);
  return await provider.estimateGas({
    to: factory,
    data: callData,
  });
};

export const estimateUserOperationGas =
  (provider: ethers.providers.JsonRpcProvider): UserOperationMiddlewareFn =>
    async (ctx) => {
      if (ethers.BigNumber.from(ctx.op.nonce).isZero()) {
        ctx.op.verificationGasLimit = ethers.BigNumber.from(
          ctx.op.verificationGasLimit
        ).add(await estimateCreationGas(provider, ctx.op.initCode));
      }

      const est = (await provider.send("eth_estimateUserOperationGas", [
        OpToJSON(ctx.op),
        ctx.entryPoint,
      ])) as GasEstimate;

      ctx.op.preVerificationGas = est.preVerificationGas;
      ctx.op.verificationGasLimit = est.verificationGasLimit ? est.verificationGasLimit : est.verificationGas;
      ctx.op.callGasLimit = est.callGasLimit;
    };

export const estimateUserOperationGasMulti =
  (provider: ethers.providers.JsonRpcProvider, signLen: number): UserOperationMiddlewareFn =>
    async (ctx) => {
      if (ethers.BigNumber.from(ctx.op.nonce).isZero()) {
        ctx.op.verificationGasLimit = ethers.BigNumber.from(
          ctx.op.verificationGasLimit
        ).add(await estimateCreationGas(provider, ctx.op.initCode));
      }

      const est = (await provider.send("eth_estimateUserOperationGas", [
        OpToJSON(ctx.op),
        ctx.entryPoint,
      ])) as GasEstimate;

      // 每多一个签名者多5000gas TODO 目前用手估算的
      const multiSignMoreVerification = ethers.BigNumber.from(6000).mul(signLen);
      const verificationGasLimit = multiSignMoreVerification.add(ethers.BigNumber.from(est.verificationGas));
      ctx.op.preVerificationGas = est.preVerificationGas;
      ctx.op.verificationGasLimit = verificationGasLimit;
      ctx.op.callGasLimit = est.callGasLimit;
    };
