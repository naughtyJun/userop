import {ethers} from "ethers";
import {UserOperationMiddlewareFn} from "../../types";

export const EOASignatureMulti =
  (signer: ethers.Signer[]): UserOperationMiddlewareFn =>
    async (ctx) => {
      let signature = "0x";
      for (const s of signer) {
        const oneSignature: string = await s.signMessage(
          ethers.utils.arrayify(ctx.getUserOpHash())
        );
        signature = signature.concat(oneSignature.slice(2));
      }
      ctx.op.signature = signature;
    };
