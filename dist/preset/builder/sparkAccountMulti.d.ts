import { BigNumberish, BytesLike, ethers } from "ethers";
import { UserOperationBuilder } from "../../builder";
import { SparkAccountMulti as SparkAccountImpl } from "../../typechain";
import { IPresetBuilderOpts } from "../../types";
export declare class SparkAccountMulti extends UserOperationBuilder {
    private signers;
    private customerNo;
    private provider;
    private entryPoint;
    private factory;
    private initCode;
    proxy: SparkAccountImpl;
    private constructor();
    private resolveAccount;
    static init(signer: ethers.Signer[], customerNo: string, rpcUrl: string, opts?: IPresetBuilderOpts): Promise<SparkAccountMulti>;
    execute(to: string, value: BigNumberish, data: BytesLike): this;
    executeBatch(to: Array<string>, value: Array<BigNumberish>, data: Array<BytesLike>): this;
}
