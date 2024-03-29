import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface KernelFactoryInterface extends utils.Interface {
    functions: {
        "createAccount(address,bytes,uint256)": FunctionFragment;
        "entryPoint()": FunctionFragment;
        "getAccountAddress(address,bytes,uint256)": FunctionFragment;
        "kernelTemplate()": FunctionFragment;
        "nextTemplate()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createAccount" | "entryPoint" | "getAccountAddress" | "kernelTemplate" | "nextTemplate"): FunctionFragment;
    encodeFunctionData(functionFragment: "createAccount", values: [string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "entryPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccountAddress", values: [string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "kernelTemplate", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextTemplate", values?: undefined): string;
    decodeFunctionResult(functionFragment: "createAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "kernelTemplate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextTemplate", data: BytesLike): Result;
    events: {
        "AccountCreated(address,address,bytes,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccountCreated"): EventFragment;
}
export interface AccountCreatedEventObject {
    account: string;
    validator: string;
    data: string;
    index: BigNumber;
}
export type AccountCreatedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], AccountCreatedEventObject>;
export type AccountCreatedEventFilter = TypedEventFilter<AccountCreatedEvent>;
export interface KernelFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: KernelFactoryInterface;
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
        createAccount(_validator: string, _data: BytesLike, _index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<[string]>;
        getAccountAddress(_validator: string, _data: BytesLike, _index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        kernelTemplate(overrides?: CallOverrides): Promise<[string]>;
        nextTemplate(overrides?: CallOverrides): Promise<[string]>;
    };
    createAccount(_validator: string, _data: BytesLike, _index: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    entryPoint(overrides?: CallOverrides): Promise<string>;
    getAccountAddress(_validator: string, _data: BytesLike, _index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    kernelTemplate(overrides?: CallOverrides): Promise<string>;
    nextTemplate(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        createAccount(_validator: string, _data: BytesLike, _index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        entryPoint(overrides?: CallOverrides): Promise<string>;
        getAccountAddress(_validator: string, _data: BytesLike, _index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        kernelTemplate(overrides?: CallOverrides): Promise<string>;
        nextTemplate(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AccountCreated(address,address,bytes,uint256)"(account?: string | null, validator?: string | null, data?: null, index?: null): AccountCreatedEventFilter;
        AccountCreated(account?: string | null, validator?: string | null, data?: null, index?: null): AccountCreatedEventFilter;
    };
    estimateGas: {
        createAccount(_validator: string, _data: BytesLike, _index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        entryPoint(overrides?: CallOverrides): Promise<BigNumber>;
        getAccountAddress(_validator: string, _data: BytesLike, _index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        kernelTemplate(overrides?: CallOverrides): Promise<BigNumber>;
        nextTemplate(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        createAccount(_validator: string, _data: BytesLike, _index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccountAddress(_validator: string, _data: BytesLike, _index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        kernelTemplate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextTemplate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
