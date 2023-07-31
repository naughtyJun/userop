import { ethers } from "ethers";
import { UserOperationMiddlewareFn } from "../../types";
export declare const estimateUserOperationGas: (provider: ethers.providers.JsonRpcProvider) => UserOperationMiddlewareFn;
export declare const estimateUserOperationGasMulti: (provider: ethers.providers.JsonRpcProvider, signLen: number) => UserOperationMiddlewareFn;
