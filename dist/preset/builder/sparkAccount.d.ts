import { BigNumberish, BytesLike, ethers } from "ethers";
import { UserOperationBuilder } from "../../builder";
import { SparkAccount as SparkAccountImpl } from "../../typechain";
import { IPresetBuilderOpts } from "../../types";
export declare class SparkAccount extends UserOperationBuilder {
    private signer;
    private customerNo;
    private provider;
    private entryPoint;
    private factory;
    private initCode;
    proxy: SparkAccountImpl;
    private constructor();
    private resolveAccount;
    static init(signer: ethers.Signer, customerNo: string, rpcUrl: string, opts?: IPresetBuilderOpts): Promise<SparkAccount>;
    execute(to: string, value: BigNumberish, data: BytesLike): this;
    executeBatch(to: Array<string>, data: Array<BytesLike>): this;
}
