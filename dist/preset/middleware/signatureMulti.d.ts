import { ethers } from "ethers";
import { UserOperationMiddlewareFn } from "../../types";
export declare const EOASignatureMulti: (signer: ethers.Signer[]) => UserOperationMiddlewareFn;
