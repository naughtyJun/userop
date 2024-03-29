import { BigNumberish, BytesLike, ethers } from "ethers";
import { UserOperationBuilder } from "../../builder";
import { SparkAccount as SparkAccountImpl } from "../../typechain";
import { IPresetBuilderOpts } from "../../types";
export declare class SparkAccount extends UserOperationBuilder {
    private signer;
    private accountNo;
    private provider;
    private entryPoint;
    private factory;
    private initCode;
    proxy: SparkAccountImpl;
    private constructor();
    private resolveAccount;
    static init(signer: ethers.Signer, factorySigner: ethers.Signer, customerNo: string, rpcUrl: string, opts?: IPresetBuilderOpts): Promise<SparkAccount>;
    execute(to: string, value: BigNumberish, data: BytesLike): this;
    executeBatch(to: Array<string>, value: Array<BigNumberish>, data: Array<BytesLike>): this;
}
