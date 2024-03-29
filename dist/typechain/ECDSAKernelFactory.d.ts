import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ECDSAKernelFactoryInterface extends utils.Interface {
    functions: {
        "createAccount(address,uint256)": FunctionFragment;
        "entryPoint()": FunctionFragment;
        "getAccountAddress(address,uint256)": FunctionFragment;
        "singletonFactory()": FunctionFragment;
        "validator()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createAccount" | "entryPoint" | "getAccountAddress" | "singletonFactory" | "validator"): FunctionFragment;
    encodeFunctionData(functionFragment: "createAccount", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "entryPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAccountAddress", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "singletonFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "validator", values?: undefined): string;
    decodeFunctionResult(functionFragment: "createAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "singletonFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validator", data: BytesLike): Result;
    events: {};
}
export interface ECDSAKernelFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ECDSAKernelFactoryInterface;
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
        createAccount(_owner: string, _index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<[string]>;
        getAccountAddress(_owner: string, _index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        singletonFactory(overrides?: CallOverrides): Promise<[string]>;
        validator(overrides?: CallOverrides): Promise<[string]>;
    };
    createAccount(_owner: string, _index: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    entryPoint(overrides?: CallOverrides): Promise<string>;
    getAccountAddress(_owner: string, _index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    singletonFactory(overrides?: CallOverrides): Promise<string>;
    validator(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        createAccount(_owner: string, _index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        entryPoint(overrides?: CallOverrides): Promise<string>;
        getAccountAddress(_owner: string, _index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        singletonFactory(overrides?: CallOverrides): Promise<string>;
        validator(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        createAccount(_owner: string, _index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        entryPoint(overrides?: CallOverrides): Promise<BigNumber>;
        getAccountAddress(_owner: string, _index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        singletonFactory(overrides?: CallOverrides): Promise<BigNumber>;
        validator(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        createAccount(_owner: string, _index: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAccountAddress(_owner: string, _index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        singletonFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
