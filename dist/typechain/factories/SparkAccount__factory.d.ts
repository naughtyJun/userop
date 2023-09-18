import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SparkAccount, SparkAccountInterface } from "../SparkAccount";
type SparkAccountConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SparkAccount__factory extends ContractFactory {
    constructor(...args: SparkAccountConstructorParams);
    deploy(anEntryPoint: string, overrides?: Overrides & {
        from?: string;
    }): Promise<SparkAccount>;
    getDeployTransaction(anEntryPoint: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): SparkAccount;
    connect(signer: Signer): SparkAccount__factory;
    static readonly bytecode = "0x60c0604052306080523480156200001557600080fd5b50604051620021c8380380620021c8833981016040819052620000389162000124565b6001600160a01b03811660a0526200004f62000056565b5062000156565b600154600160a81b900460ff1615620000c55760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b600154600160a01b900460ff9081161462000122576001805460ff60a01b191660ff60a01b17905560405160ff81527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6000602082840312156200013757600080fd5b81516001600160a01b03811681146200014f57600080fd5b9392505050565b60805160a051612006620001c260003960008181610375015281816107840152818161080c01528181610b2b01528181610bc301528181610d1d0152610ff20152600081816104ef0152818161053801528181610895015281816108d5015261097901526120066000f3fe6080604052600436106101435760003560e01c80634fb2e45d116100b6578063bb4276c91161006f578063bb4276c9146103b9578063bc197c81146103d9578063c399ec8814610408578063d087d2881461041d578063f23a6e6114610432578063f62d18881461045f57600080fd5b80634fb2e45d146102f157806352d1902d1461031157806373cc802a146103265780638da5cb5b14610346578063b0d691fe14610366578063b61d27f61461039957600080fd5b8063380ef3fe11610108578063380ef3fe146102305780633a871cdd1461026857806347e1da2a146102965780634a58db19146102b65780634d44560d146102be5780634f1ef286146102de57600080fd5b806223de291461014f57806301ffc9a714610176578063150b7a02146101ab57806316a51d31146101f05780633659cfe61461021057600080fd5b3661014a57005b600080fd5b34801561015b57600080fd5b5061017461016a366004611837565b5050505050505050565b005b34801561018257600080fd5b506101966101913660046118e7565b61047f565b60405190151581526020015b60405180910390f35b3480156101b757600080fd5b506101d76101c6366004611911565b630a85bd0160e11b95945050505050565b6040516001600160e01b031990911681526020016101a2565b3480156101fc57600080fd5b5061017461020b366004611983565b6104d1565b34801561021c57600080fd5b5061017461022b366004611983565b6104e5565b34801561023c57600080fd5b50600154610250906001600160a01b031681565b6040516001600160a01b0390911681526020016101a2565b34801561027457600080fd5b506102886102833660046119a0565b6105ca565b6040519081526020016101a2565b3480156102a257600080fd5b506101746102b1366004611a37565b6105f0565b610174610782565b3480156102ca57600080fd5b506101746102d9366004611ad0565b610802565b6101746102ec366004611b87565b61088b565b3480156102fd57600080fd5b5061017461030c366004611983565b61095b565b34801561031d57600080fd5b5061028861096c565b34801561033257600080fd5b50610174610341366004611983565b610a1f565b34801561035257600080fd5b50600054610250906001600160a01b031681565b34801561037257600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610250565b3480156103a557600080fd5b506101746103b4366004611bea565b610a27565b3480156103c557600080fd5b506101746103d4366004611c45565b610a76565b3480156103e557600080fd5b506101d76103f4366004611c7e565b63bc197c8160e01b98975050505050505050565b34801561041457600080fd5b50610288610b0b565b34801561042957600080fd5b50610288610b9c565b34801561043e57600080fd5b506101d761044d366004611d1b565b63f23a6e6160e01b9695505050505050565b34801561046b57600080fd5b5061017461047a366004611d84565b610bf2565b60006001600160e01b03198216630a85bd0160e11b14806104b057506001600160e01b03198216630271189760e51b145b806104cb57506001600160e01b031982166301ffc9a760e01b145b92915050565b6104d9610d12565b6104e281610da1565b50565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036105365760405162461bcd60e51b815260040161052d90611dcc565b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661057f600080516020611f8a833981519152546001600160a01b031690565b6001600160a01b0316146105a55760405162461bcd60e51b815260040161052d90611e18565b6105ae81610e6f565b604080516000808252602082019092526104e291839190610e77565b60006105d4610fe7565b6105de848461105f565b90506105e982611105565b9392505050565b6105f8610d12565b848114801561060e575082158061060e57508281145b6106505760405162461bcd60e51b815260206004820152601360248201527277726f6e67206172726179206c656e6774687360681b604482015260640161052d565b60008390036107065760005b85811015610700576106ee87878381811061067957610679611e64565b905060200201602081019061068e9190611983565b60008585858181106106a2576106a2611e64565b90506020028101906106b49190611e7a565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061115292505050565b806106f881611ec0565b91505061065c565b5061077a565b60005b858110156107785761076687878381811061072657610726611e64565b905060200201602081019061073b9190611983565b86868481811061074d5761074d611e64565b905060200201358585858181106106a2576106a2611e64565b8061077081611ec0565b915050610709565b505b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000060405163b760faf960e01b81523060048201526001600160a01b03919091169063b760faf99034906024016000604051808303818588803b1580156107e757600080fd5b505af11580156107fb573d6000803e3d6000fd5b5050505050565b61080a6111c2565b7f000000000000000000000000000000000000000000000000000000000000000060405163040b850f60e31b81526001600160a01b03848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561087757600080fd5b505af115801561077a573d6000803e3d6000fd5b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036108d35760405162461bcd60e51b815260040161052d90611dcc565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661091c600080516020611f8a833981519152546001600160a01b031690565b6001600160a01b0316146109425760405162461bcd60e51b815260040161052d90611e18565b61094b82610e6f565b61095782826001610e77565b5050565b610963610d12565b6104e281611213565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a0c5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c0000000000000000606482015260840161052d565b50600080516020611f8a83398151915290565b6109636112d1565b610a2f610d12565b610a70848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061115292505050565b50505050565b6000546001600160a01b0316158015610a9857506001546001600160a01b0316155b610af95760405162461bcd60e51b815260206004820152602c60248201527f416c726561647920696e697469616c697a6564206f776e657220616e6420736560448201526b6375726974794d6f64756c6560a01b606482015260840161052d565b610b0282611213565b61095781610da1565b6040516370a0823160e01b81523060048201526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610b73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b979190611ee7565b905090565b604051631aab3f0d60e11b8152306004820152600060248201819052906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610b56565b600154600160a81b900460ff1615808015610c18575060018054600160a01b900460ff16105b80610c385750303b158015610c38575060018054600160a01b900460ff16145b610c9b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161052d565b6001805460ff60a01b1916600160a01b1790558015610cc8576001805460ff60a81b1916600160a81b1790555b8015610957576001805460ff60a81b191681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610d5357506000546001600160a01b031633145b610d9f5760405162461bcd60e51b815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e74604482015260640161052d565b565b6001600160a01b038116610e1d5760405162461bcd60e51b815260206004820152603860248201527f537061726b4163636f756e74417574683a206e65772073656375726974794d6f60448201527f64756c6520697320746865207a65726f20616464726573730000000000000000606482015260840161052d565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f397341df9e7a3e36858c4ceac9a768d5fd2f8be40a9cbb65776216a4f2bb8d3790600090a35050565b6104e26111c2565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610eaf57610eaa83611321565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015610f09575060408051601f3d908101601f19168201909252610f0691810190611ee7565b60015b610f6c5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b606482015260840161052d565b600080516020611f8a8339815191528114610fdb5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b606482015260840161052d565b50610eaa8383836113bd565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610d9f5760405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e7400000000604482015260640161052d565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000908152601c829052603c81206110dc61109f610140860186611e7a565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525085939250506113e29050565b6000546001600160a01b039081169116146110fb5760019150506104cb565b5060009392505050565b80156104e257604051600090339060001990849084818181858888f193505050503d80600081146107fb576040519150601f19603f3d011682016040523d82523d6000602084013e6107fb565b600080846001600160a01b0316848460405161116e9190611f24565b60006040518083038185875af1925050503d80600081146111ab576040519150601f19603f3d011682016040523d82523d6000602084013e6111b0565b606091505b5091509150816107fb57805160208201fd5b6000546001600160a01b03163314806111da57503330145b610d9f5760405162461bcd60e51b815260206004820152600a60248201526937b7363c9037bbb732b960b11b604482015260640161052d565b6001600160a01b0381166112815760405162461bcd60e51b815260206004820152602f60248201527f537061726b4163636f756e74417574683a206e6577206f776e6572206973207460448201526e6865207a65726f206164647265737360881b606482015260840161052d565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001546001600160a01b03163314610d9f5760405162461bcd60e51b81526020600482015260136024820152726f6e6c792073656375726974794d6f64756c6560681b604482015260640161052d565b6001600160a01b0381163b61138e5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840161052d565b600080516020611f8a83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6113c683611406565b6000825111806113d35750805b15610eaa57610a708383611446565b60008060006113f1858561146b565b915091506113fe816114b0565b509392505050565b61140f81611321565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606105e98383604051806060016040528060278152602001611faa602791396115fa565b60008082516041036114a15760208301516040840151606085015160001a61149587828585611672565b945094505050506114a9565b506000905060025b9250929050565b60008160048111156114c4576114c4611f40565b036114cc5750565b60018160048111156114e0576114e0611f40565b0361152d5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161052d565b600281600481111561154157611541611f40565b0361158e5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161052d565b60038160048111156115a2576115a2611f40565b036104e25760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161052d565b6060600080856001600160a01b0316856040516116179190611f24565b600060405180830381855af49150503d8060008114611652576040519150601f19603f3d011682016040523d82523d6000602084013e611657565b606091505b509150915061166886838387611736565b9695505050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156116a9575060009050600361172d565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156116fd573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166117265760006001925092505061172d565b9150600090505b94509492505050565b606083156117a557825160000361179e576001600160a01b0385163b61179e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161052d565b50816117af565b6117af83836117b7565b949350505050565b8151156117c75781518083602001fd5b8060405162461bcd60e51b815260040161052d9190611f56565b6001600160a01b03811681146104e257600080fd5b60008083601f84011261180857600080fd5b5081356001600160401b0381111561181f57600080fd5b6020830191508360208285010111156114a957600080fd5b60008060008060008060008060c0898b03121561185357600080fd5b883561185e816117e1565b9750602089013561186e816117e1565b9650604089013561187e816117e1565b95506060890135945060808901356001600160401b03808211156118a157600080fd5b6118ad8c838d016117f6565b909650945060a08b01359150808211156118c657600080fd5b506118d38b828c016117f6565b999c989b5096995094979396929594505050565b6000602082840312156118f957600080fd5b81356001600160e01b0319811681146105e957600080fd5b60008060008060006080868803121561192957600080fd5b8535611934816117e1565b94506020860135611944816117e1565b93506040860135925060608601356001600160401b0381111561196657600080fd5b611972888289016117f6565b969995985093965092949392505050565b60006020828403121561199557600080fd5b81356105e9816117e1565b6000806000606084860312156119b557600080fd5b83356001600160401b038111156119cb57600080fd5b840161016081870312156119de57600080fd5b95602085013595506040909401359392505050565b60008083601f840112611a0557600080fd5b5081356001600160401b03811115611a1c57600080fd5b6020830191508360208260051b85010111156114a957600080fd5b60008060008060008060608789031215611a5057600080fd5b86356001600160401b0380821115611a6757600080fd5b611a738a838b016119f3565b90985096506020890135915080821115611a8c57600080fd5b611a988a838b016119f3565b90965094506040890135915080821115611ab157600080fd5b50611abe89828a016119f3565b979a9699509497509295939492505050565b60008060408385031215611ae357600080fd5b8235611aee816117e1565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b60006001600160401b0380841115611b2c57611b2c611afc565b604051601f8501601f19908116603f01168101908282118183101715611b5457611b54611afc565b81604052809350858152868686011115611b6d57600080fd5b858560208301376000602087830101525050509392505050565b60008060408385031215611b9a57600080fd5b8235611ba5816117e1565b915060208301356001600160401b03811115611bc057600080fd5b8301601f81018513611bd157600080fd5b611be085823560208401611b12565b9150509250929050565b60008060008060608587031215611c0057600080fd5b8435611c0b816117e1565b93506020850135925060408501356001600160401b03811115611c2d57600080fd5b611c39878288016117f6565b95989497509550505050565b60008060408385031215611c5857600080fd5b8235611c63816117e1565b91506020830135611c73816117e1565b809150509250929050565b60008060008060008060008060a0898b031215611c9a57600080fd5b8835611ca5816117e1565b97506020890135611cb5816117e1565b965060408901356001600160401b0380821115611cd157600080fd5b611cdd8c838d016119f3565b909850965060608b0135915080821115611cf657600080fd5b611d028c838d016119f3565b909650945060808b01359150808211156118c657600080fd5b60008060008060008060a08789031215611d3457600080fd5b8635611d3f816117e1565b95506020870135611d4f816117e1565b9450604087013593506060870135925060808701356001600160401b03811115611d7857600080fd5b611abe89828a016117f6565b600060208284031215611d9657600080fd5b81356001600160401b03811115611dac57600080fd5b8201601f81018413611dbd57600080fd5b6117af84823560208401611b12565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b6000808335601e19843603018112611e9157600080fd5b8301803591506001600160401b03821115611eab57600080fd5b6020019150368190038213156114a957600080fd5b600060018201611ee057634e487b7160e01b600052601160045260246000fd5b5060010190565b600060208284031215611ef957600080fd5b5051919050565b60005b83811015611f1b578181015183820152602001611f03565b50506000910152565b60008251611f36818460208701611f00565b9190910192915050565b634e487b7160e01b600052602160045260246000fd5b6020815260008251806020840152611f75816040850160208701611f00565b601f01601f1916919091016040019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220f2731ccef25bb8984272dd433da9c77e7b168300cb9c48f9fdf78cfc7aeba13964736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "anEntryPoint";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "previousAdmin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "AdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "beacon";
            readonly type: "address";
        }];
        readonly name: "BeaconUpgraded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousSecurityModule";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newSecurityModule";
            readonly type: "address";
        }];
        readonly name: "SecurityModuleChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "addDeposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "entryPoint";
        readonly outputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "dest";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "func";
            readonly type: "bytes";
        }];
        readonly name: "execute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "dest";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "value";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "func";
            readonly type: "bytes[]";
        }];
        readonly name: "executeBatch";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDeposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNonce";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "newSecurityModule";
            readonly type: "address";
        }];
        readonly name: "initOwnerAndSecurityModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_accountNo";
            readonly type: "string";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155BatchReceived";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC721Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "resetOwner";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "securityModule";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "tokensReceived";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwner";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newSecurityModule";
            readonly type: "address";
        }];
        readonly name: "upgradeSecurityModule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "initCode";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "callGasLimit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "verificationGasLimit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "preVerificationGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxFeePerGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxPriorityFeePerGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "paymasterAndData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "signature";
                readonly type: "bytes";
            }];
            readonly internalType: "struct UserOperation";
            readonly name: "userOp";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "userOpHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "missingAccountFunds";
            readonly type: "uint256";
        }];
        readonly name: "validateUserOp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "validationData";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "withdrawAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdrawDepositTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): SparkAccountInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SparkAccount;
}
export {};
