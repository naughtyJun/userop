import { BigNumberish, BytesLike, ethers } from "ethers";
import { UserOperationBuilder } from "../../builder";
import { TestAccount as TestAccountImpl } from "../../typechain";
import { IPresetBuilderOpts } from "../../types";
export declare class TestAccount extends UserOperationBuilder {
    private signer;
    private customerNo;
    private provider;
    private entryPoint;
    private factory;
    private initCode;
    proxy: TestAccountImpl;
    private constructor();
    private resolveAccount;
    static init(signer: ethers.Signer, customerNo: string, rpcUrl: string, opts?: IPresetBuilderOpts): Promise<TestAccount>;
    execute(to: string, value: BigNumberish, data: BytesLike): this;
    executeBatch(to: Array<string>, data: Array<BytesLike>): this;
}
