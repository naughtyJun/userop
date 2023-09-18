import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface SparkAccountFactoryInterface extends utils.Interface {
    functions: {
        "accountImplementation()": FunctionFragment;
        "addStake(uint32)": FunctionFragment;
        "createAccount(uint256,string,address,bytes)": FunctionFragment;
        "encodeTransactionData(uint256,string,address)": FunctionFragment;
        "entryPointImplementation()": FunctionFragment;
        "getAddress(uint256,string)": FunctionFragment;
        "getCreationCode()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "securityModule()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unlockStake()": FunctionFragment;
        "upgradeSecurityModule(address)": FunctionFragment;
        "withdrawStake(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accountImplementation" | "addStake" | "createAccount" | "encodeTransactionData" | "entryPointImplementation" | "getAddress" | "getCreationCode" | "owner" | "renounceOwnership" | "securityModule" | "transferOwnership" | "unlockStake" | "upgradeSecurityModule" | "withdrawStake"): FunctionFragment;
    encodeFunctionData(functionFragment: "accountImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "addStake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "createAccount", values: [BigNumberish, string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "encodeTransactionData", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "entryPointImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAddress", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getCreationCode", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "securityModule", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "unlockStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeSecurityModule", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawStake", values: [string]): string;
    decodeFunctionResult(functionFragment: "accountImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encodeTransactionData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "entryPointImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCreationCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "securityModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeSecurityModule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawStake", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
        "SparkAccountInitialized(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SparkAccountInitialized"): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface SparkAccountInitializedEventObject {
    entryPoint: string;
    account: string;
}
export type SparkAccountInitializedEvent = TypedEvent<[
    string,
    string
], SparkAccountInitializedEventObject>;
export type SparkAccountInitializedEventFilter = TypedEventFilter<SparkAccountInitializedEvent>;
export interface SparkAccountFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SparkAccountFactoryInterface;
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
        accountImplementation(overrides?: CallOverrides): Promise<[string]>;
        addStake(unstakeDelaySec: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createAccount(salt: BigNumberish, accountNo: string, owner: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        encodeTransactionData(salt: BigNumberish, accountNo: string, owner: string, overrides?: CallOverrides): Promise<[string]>;
        entryPointImplementation(overrides?: CallOverrides): Promise<[string]>;
        getAddress(salt: BigNumberish, account_no: string, overrides?: CallOverrides): Promise<[string]>;
        getCreationCode(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        securityModule(overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        unlockStake(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        upgradeSecurityModule(_securityModule: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawStake(withdrawAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    accountImplementation(overrides?: CallOverrides): Promise<string>;
    addStake(unstakeDelaySec: BigNumberish, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createAccount(salt: BigNumberish, accountNo: string, owner: string, signature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    encodeTransactionData(salt: BigNumberish, accountNo: string, owner: string, overrides?: CallOverrides): Promise<string>;
    entryPointImplementation(overrides?: CallOverrides): Promise<string>;
    getAddress(salt: BigNumberish, account_no: string, overrides?: CallOverrides): Promise<string>;
    getCreationCode(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    securityModule(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    unlockStake(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    upgradeSecurityModule(_securityModule: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawStake(withdrawAddress: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        accountImplementation(overrides?: CallOverrides): Promise<string>;
        addStake(unstakeDelaySec: BigNumberish, overrides?: CallOverrides): Promise<void>;
        createAccount(salt: BigNumberish, accountNo: string, owner: string, signature: BytesLike, overrides?: CallOverrides): Promise<string>;
        encodeTransactionData(salt: BigNumberish, accountNo: string, owner: string, overrides?: CallOverrides): Promise<string>;
        entryPointImplementation(overrides?: CallOverrides): Promise<string>;
        getAddress(salt: BigNumberish, account_no: string, overrides?: CallOverrides): Promise<string>;
        getCreationCode(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        securityModule(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        unlockStake(overrides?: CallOverrides): Promise<void>;
        upgradeSecurityModule(_securityModule: string, overrides?: CallOverrides): Promise<void>;
        withdrawStake(withdrawAddress: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "SparkAccountInitialized(address,address)"(entryPoint?: string | null, account?: string | null): SparkAccountInitializedEventFilter;
        SparkAccountInitialized(entryPoint?: string | null, account?: string | null): SparkAccountInitializedEventFilter;
    };
    estimateGas: {
        accountImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        addStake(unstakeDelaySec: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        createAccount(salt: BigNumberish, accountNo: string, owner: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        encodeTransactionData(salt: BigNumberish, accountNo: string, owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        entryPointImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        getAddress(salt: BigNumberish, account_no: string, overrides?: CallOverrides): Promise<BigNumber>;
        getCreationCode(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        securityModule(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        unlockStake(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        upgradeSecurityModule(_securityModule: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawStake(withdrawAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accountImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addStake(unstakeDelaySec: BigNumberish, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createAccount(salt: BigNumberish, accountNo: string, owner: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        encodeTransactionData(salt: BigNumberish, accountNo: string, owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        entryPointImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAddress(salt: BigNumberish, account_no: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCreationCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        securityModule(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        unlockStake(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        upgradeSecurityModule(_securityModule: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawStake(withdrawAddress: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
