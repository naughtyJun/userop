import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type UserOperationStruct = {
    sender: string;
    nonce: BigNumberish;
    initCode: BytesLike;
    callData: BytesLike;
    callGasLimit: BigNumberish;
    verificationGasLimit: BigNumberish;
    preVerificationGas: BigNumberish;
    maxFeePerGas: BigNumberish;
    maxPriorityFeePerGas: BigNumberish;
    paymasterAndData: BytesLike;
    signature: BytesLike;
};
export type UserOperationStructOutput = [
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
] & {
    sender: string;
    nonce: BigNumber;
    initCode: string;
    callData: string;
    callGasLimit: BigNumber;
    verificationGasLimit: BigNumber;
    preVerificationGas: BigNumber;
    maxFeePerGas: BigNumber;
    maxPriorityFeePerGas: BigNumber;
    paymasterAndData: string;
    signature: string;
};
export interface ECDSAValidatorInterface extends utils.Interface {
    functions: {
        "disable(bytes)": FunctionFragment;
        "ecdsaValidatorStorage(address)": FunctionFragment;
        "enable(bytes)": FunctionFragment;
        "validateSignature(bytes32,bytes)": FunctionFragment;
        "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "disable" | "ecdsaValidatorStorage" | "enable" | "validateSignature" | "validateUserOp"): FunctionFragment;
    encodeFunctionData(functionFragment: "disable", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "ecdsaValidatorStorage", values: [string]): string;
    encodeFunctionData(functionFragment: "enable", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "validateSignature", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "validateUserOp", values: [UserOperationStruct, BytesLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "disable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ecdsaValidatorStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUserOp", data: BytesLike): Result;
    events: {
        "OwnerChanged(address,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
}
export interface OwnerChangedEventObject {
    kernel: string;
    oldOwner: string;
    newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<[
    string,
    string,
    string
], OwnerChangedEventObject>;
export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;
export interface ECDSAValidator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ECDSAValidatorInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        disable(arg0: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        ecdsaValidatorStorage(arg0: string, overrides?: CallOverrides): Promise<[string] & {
            owner: string;
        }>;
        enable(_data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        validateSignature(hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        validateUserOp(_userOp: UserOperationStruct, _userOpHash: BytesLike, arg2: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            validationData: BigNumber;
        }>;
    };
    disable(arg0: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    ecdsaValidatorStorage(arg0: string, overrides?: CallOverrides): Promise<string>;
    enable(_data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    validateSignature(hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    validateUserOp(_userOp: UserOperationStruct, _userOpHash: BytesLike, arg2: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        disable(arg0: BytesLike, overrides?: CallOverrides): Promise<void>;
        ecdsaValidatorStorage(arg0: string, overrides?: CallOverrides): Promise<string>;
        enable(_data: BytesLike, overrides?: CallOverrides): Promise<void>;
        validateSignature(hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        validateUserOp(_userOp: UserOperationStruct, _userOpHash: BytesLike, arg2: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "OwnerChanged(address,address,address)"(kernel?: string | null, oldOwner?: string | null, newOwner?: string | null): OwnerChangedEventFilter;
        OwnerChanged(kernel?: string | null, oldOwner?: string | null, newOwner?: string | null): OwnerChangedEventFilter;
    };
    estimateGas: {
        disable(arg0: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        ecdsaValidatorStorage(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        enable(_data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        validateSignature(hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        validateUserOp(_userOp: UserOperationStruct, _userOpHash: BytesLike, arg2: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        disable(arg0: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        ecdsaValidatorStorage(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        enable(_data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        validateSignature(hash: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateUserOp(_userOp: UserOperationStruct, _userOpHash: BytesLike, arg2: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
