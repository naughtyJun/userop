import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SparkAccountMultiFactory, SparkAccountMultiFactoryInterface } from "../SparkAccountMultiFactory";
type SparkAccountMultiFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SparkAccountMultiFactory__factory extends ContractFactory {
    constructor(...args: SparkAccountMultiFactoryConstructorParams);
    deploy(_entryPoint: string, overrides?: Overrides & {
        from?: string;
    }): Promise<SparkAccountMultiFactory>;
    getDeployTransaction(_entryPoint: string, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): SparkAccountMultiFactory;
    connect(signer: Signer): SparkAccountMultiFactory__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051613b4a380380613b4a83398101604081905261002f91610088565b8060405161003c9061007b565b6001600160a01b039091168152602001604051809103906000f080158015610068573d6000803e3d6000fd5b506001600160a01b0316608052506100b8565b612d7c80610dce83390190565b60006020828403121561009a57600080fd5b81516001600160a01b03811681146100b157600080fd5b9392505050565b608051610cef6100df60003960008181604b0152818160eb015261023f0152610cef6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806311464fbe1461004657806321ec1253146100965780636586ace6146100a9575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61006d6100a4366004610366565b6100bc565b61006d6100b7366004610366565b610203565b60006101f98260001b604051806020016100d590610359565b6020820181038252601f19601f820116604052507f0000000000000000000000000000000000000000000000000000000000000000878760405160240161011d9291906103de565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ff62d18880000000000000000000000000000000000000000000000000000000017905290516101a29392910161045b565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526101de92916020016104c9565b60405160208183030381529060405280519060200120610327565b90505b9392505050565b6000806102118585856100bc565b905073ffffffffffffffffffffffffffffffffffffffff81163b8015610239575090506101fc565b8360001b7f000000000000000000000000000000000000000000000000000000000000000087876040516024016102719291906103de565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ff62d188800000000000000000000000000000000000000000000000000000000179052516102f190610359565b6102fc92919061045b565b8190604051809103906000f590508015801561031c573d6000803e3d6000fd5b509695505050505050565b60006101fc8383306000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b6107c1806104f983390190565b60008060006040848603121561037b57600080fd5b833567ffffffffffffffff8082111561039357600080fd5b818601915086601f8301126103a757600080fd5b8135818111156103b657600080fd5b8760208285010111156103c857600080fd5b6020928301989097509590910135949350505050565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b60005b8381101561044657818101518382015260200161042e565b83811115610455576000848401525b50505050565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201526000825180604084015261049681606085016020870161042b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016060019392505050565b600083516104db81846020880161042b565b8351908301906104ef81836020880161042b565b0194935050505056fe60806040526040516107c13803806107c183398101604081905261002291610321565b61002e82826000610035565b505061043e565b61003e8361006b565b60008251118061004b5750805b156100665761006483836100ab60201b6100291760201c565b505b505050565b610074816100d7565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d0838360405180606001604052806027815260200161079a602791396101a9565b9392505050565b6100ea8161022260201b6100551760201c565b6101515760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61023160201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060600080856001600160a01b0316856040516101c691906103ef565b600060405180830381855af49150503d8060008114610201576040519150601f19603f3d011682016040523d82523d6000602084013e610206565b606091505b50909250905061021886838387610234565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102a357825160000361029c576001600160a01b0385163b61029c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610148565b50816102ad565b6102ad83836102b5565b949350505050565b8151156102c55781518083602001fd5b8060405162461bcd60e51b8152600401610148919061040b565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103105781810151838201526020016102f8565b838111156100645750506000910152565b6000806040838503121561033457600080fd5b82516001600160a01b038116811461034b57600080fd5b60208401519092506001600160401b038082111561036857600080fd5b818501915085601f83011261037c57600080fd5b81518181111561038e5761038e6102df565b604051601f8201601f19908116603f011681019083821181831017156103b6576103b66102df565b816040528281528860208487010111156103cf57600080fd5b6103e08360208301602088016102f5565b80955050505050509250929050565b600082516104018184602087016102f5565b9190910192915050565b602081526000825180602084015261042a8160408501602087016102f5565b601f01601f19169190910160400192915050565b61034d8061044d6000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b6100b9565b565b606061004e83836040518060600160405280602781526020016102f1602791396100dd565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e8080156100d8573d6000f35b3d6000fd5b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516101079190610283565b600060405180830381855af49150503d8060008114610142576040519150601f19603f3d011682016040523d82523d6000602084013e610147565b606091505b509150915061015886838387610162565b9695505050505050565b606083156101fd5782516000036101f65773ffffffffffffffffffffffffffffffffffffffff85163b6101f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b5081610207565b610207838361020f565b949350505050565b81511561021f5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ed919061029f565b60005b8381101561026e578181015183820152602001610256565b8381111561027d576000848401525b50505050565b60008251610295818460208701610253565b9190910192915050565b60208152600082518060208401526102be816040850160208701610253565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212207206d121ffa3833c53409418e4fa745480d0e85b53510553873d6d68cc9bcdb864736f6c634300080f0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122077ee6ab5586be05652b7865a06dff3ff91df032854fd12a3d58ce05786e7ab7e64736f6c634300080f003360c0604052306080523480156200001557600080fd5b5060405162002d7c38038062002d7c833981016040819052620000389162000117565b6001600160a01b03811660a0526200004f62000056565b5062000149565b600054610100900460ff1615620000c35760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161462000115576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6000602082840312156200012a57600080fd5b81516001600160a01b03811681146200014257600080fd5b9392505050565b60805160a051612bc7620001b5600039600081816103fa01528181610dd701528181610e7d015281816112880152818161134601528181611a6b0152611c82015260008181610a1c01528181610acc01528181610f3901528181610fe901526111290152612bc76000f3fe60806040526004361061018e5760003560e01c80634d44560d116100d6578063c399ec881161007f578063ed516d5111610059578063ed516d51146104d2578063f23a6e61146104f2578063f62d18881461053857600080fd5b8063c399ec8814610486578063d087d2881461049b578063d3217c6b146104b057600080fd5b8063b0d691fe116100b0578063b0d691fe146103eb578063b61d27f61461041e578063bc197c811461043e57600080fd5b80634d44560d146103a35780634f1ef286146103c357806352d1902d146103d657600080fd5b80632f54bf6e1161013857806342cde4e81161011257806342cde4e81461036557806347e1da2a1461037b5780634a58db191461039b57600080fd5b80632f54bf6e146102f55780633659cfe6146103255780633a871cdd1461034557600080fd5b80630db02622116101695780630db026221461023b578063150b7a021461025f5780631ea557cc146102d557600080fd5b806223de291461019a57806301ffc9a7146101c1578063025e7c27146101f657600080fd5b3661019557005b600080fd5b3480156101a657600080fd5b506101bf6101b5366004612044565b5050505050505050565b005b3480156101cd57600080fd5b506101e16101dc3660046120f5565b610558565b60405190151581526020015b60405180910390f35b34801561020257600080fd5b50610216610211366004612137565b61063d565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101ed565b34801561024757600080fd5b5061025160055481565b6040519081526020016101ed565b34801561026b57600080fd5b506102a461027a366004612150565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016101ed565b3480156102e157600080fd5b506101bf6102f0366004612241565b610674565b34801561030157600080fd5b506101e16103103660046122f9565b60046020526000908152604090205460ff1681565b34801561033157600080fd5b506101bf6103403660046122f9565b610a05565b34801561035157600080fd5b50610251610360366004612316565b610c01565b34801561037157600080fd5b5061025160035481565b34801561038757600080fd5b506101bf6103963660046123af565b610c27565b6101bf610dd5565b3480156103af57600080fd5b506101bf6103be366004612449565b610e7b565b6101bf6103d136600461250b565b610f22565b3480156103e257600080fd5b5061025161110f565b3480156103f757600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610216565b34801561042a57600080fd5b506101bf61043936600461255b565b6111fb565b34801561044a57600080fd5b506102a46104593660046125b7565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b34801561049257600080fd5b50610251611242565b3480156104a757600080fd5b506102516112f9565b3480156104bc57600080fd5b506104c5611375565b6040516101ed9190612681565b3480156104de57600080fd5b506101bf6104ed3660046126d2565b611403565b3480156104fe57600080fd5b506102a461050d366004612703565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b34801561054457600080fd5b506101bf61055336600461276d565b6116bc565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a020000000000000000000000000000000000000000000000000000000014806105eb57507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061063757507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b6002818154811061064d57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60035415610709576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f7468726573686f6c64206d757374206e6f7420626520696e697469616c697a6560448201527f640000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b815181111561079a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f7468726573686f6c64206d757374206265206c657373207468616e206f72206560448201527f7175616c20746f206f776e6572730000000000000000000000000000000000006064820152608401610700565b600181101561082b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f7468726573686f6c64206d7573742062652067726561746572207468616e206f60448201527f7220657175616c20746f203100000000000000000000000000000000000000006064820152608401610700565b60005b82518110156109fa57600083828151811061084b5761084b6127b6565b60200260200101519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141580156108a8575073ffffffffffffffffffffffffffffffffffffffff81163014155b80156108da575073ffffffffffffffffffffffffffffffffffffffff811660009081526004602052604090205460ff16155b610940576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f6f776e6572206d757374206e6f742062652030206164647265737300000000006044820152606401610700565b6002805460018181019092557f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace01805473ffffffffffffffffffffffffffffffffffffffff9093167fffffffffffffffffffffffff00000000000000000000000000000000000000009093168317905560009182526004602052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169091179055806109f281612814565b91505061082e565b509051600555600355565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610aca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610700565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610b3f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610be2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610700565b60408051600080825260208201909252610bfe9183919061184f565b50565b6000610c0b611a53565b610c158484611af4565b9050610c2082611b5d565b9392505050565b8481148015610c3d5750821580610c3d57508281145b610ca3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e67746873000000000000000000000000006044820152606401610700565b6000839003610d595760005b85811015610d5357610d41878783818110610ccc57610ccc6127b6565b9050602002016020810190610ce191906122f9565b6000858585818110610cf557610cf56127b6565b9050602002810190610d07919061284c565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611bc892505050565b80610d4b81612814565b915050610caf565b50610dcd565b60005b85811015610dcb57610db9878783818110610d7957610d796127b6565b9050602002016020810190610d8e91906122f9565b868684818110610da057610da06127b6565b90506020020135858585818110610cf557610cf56127b6565b80610dc381612814565b915050610d5c565b505b505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b158015610e6057600080fd5b505af1158015610e74573d6000803e3d6000fd5b5050505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b158015610f0e57600080fd5b505af1158015610dcd573d6000803e3d6000fd5b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610fe7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610700565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661105c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16146110ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610700565b61110b8282600161184f565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146111d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610700565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b61123c848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611bc892505050565b50505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa1580156112d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112f491906128b1565b905090565b6040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482018190529073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906335567e1a906044016112b3565b60018054611382906128ca565b80601f01602080910402602001604051908101604052809291908181526020018280546113ae906128ca565b80156113fb5780601f106113d0576101008083540402835291602001916113fb565b820191906000526020600020905b8154815290600101906020018083116113de57829003601f168201915b505050505081565b6003548061146d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f57544635303035000000000000000000000000000000000000000000000000006044820152606401610700565b61147881604161291d565b825110156114e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f57544635303036000000000000000000000000000000000000000000000000006044820152606401610700565b6000808060008060005b868110156116b157602060418083028a01918201516040830151929091015160ff16916040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c81018d90529296509094509250600190605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa1580156115c9573d6000803e3d6000fd5b5050506020604051035194508573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16118015611635575073ffffffffffffffffffffffffffffffffffffffff851660009081526004602052604090205460ff165b61169b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f57544635303037000000000000000000000000000000000000000000000000006044820152606401610700565b84955080806116a990612814565b9150506114ec565b505050505050505050565b600054610100900460ff16158080156116dc5750600054600160ff909116105b806116f65750303b1580156116f6575060005460ff166001145b611782576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610700565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905580156117e057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b6117e982611c45565b801561110b57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156118875761188283611ccc565b505050565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561190c575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611909918101906128b1565b60015b611998576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610700565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114611a47576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610700565b50611882838383611dd6565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611af2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152606401610700565b565b6000600354600003611b0857506000610637565b611b5482611b1a61014086018661284c565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061140392505050565b50600092915050565b8015610bfe5760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d8060008114610e74576040519150601f19603f3d011682016040523d82523d6000602084013e610e74565b6000808473ffffffffffffffffffffffffffffffffffffffff168484604051611bf1919061295a565b60006040518083038185875af1925050503d8060008114611c2e576040519150601f19603f3d011682016040523d82523d6000602084013e611c33565b606091505b509150915081610e7457805160208201fd5b6001611c5182826129bc565b506001604051611c619190612ad6565b6040519081900381209073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016907fc27e6dee385f97256803537c89482a201cd863d49397e98ca8dde0930f3d572290600090a350565b73ffffffffffffffffffffffffffffffffffffffff81163b611d70576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610700565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b611ddf83611dfb565b600082511180611dec5750805b156118825761123c8383611e48565b611e0481611ccc565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060610c208383604051806060016040528060278152602001612b6b6027913960606000808573ffffffffffffffffffffffffffffffffffffffff1685604051611e92919061295a565b600060405180830381855af49150503d8060008114611ecd576040519150601f19603f3d011682016040523d82523d6000602084013e611ed2565b606091505b5091509150611ee386838387611eed565b9695505050505050565b60608315611f83578251600003611f7c5773ffffffffffffffffffffffffffffffffffffffff85163b611f7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610700565b5081611f8d565b611f8d8383611f95565b949350505050565b815115611fa55781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107009190612681565b73ffffffffffffffffffffffffffffffffffffffff81168114610bfe57600080fd5b60008083601f84011261200d57600080fd5b50813567ffffffffffffffff81111561202557600080fd5b60208301915083602082850101111561203d57600080fd5b9250929050565b60008060008060008060008060c0898b03121561206057600080fd5b883561206b81611fd9565b9750602089013561207b81611fd9565b9650604089013561208b81611fd9565b955060608901359450608089013567ffffffffffffffff808211156120af57600080fd5b6120bb8c838d01611ffb565b909650945060a08b01359150808211156120d457600080fd5b506120e18b828c01611ffb565b999c989b5096995094979396929594505050565b60006020828403121561210757600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610c2057600080fd5b60006020828403121561214957600080fd5b5035919050565b60008060008060006080868803121561216857600080fd5b853561217381611fd9565b9450602086013561218381611fd9565b935060408601359250606086013567ffffffffffffffff8111156121a657600080fd5b6121b288828901611ffb565b969995985093965092949392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612239576122396121c3565b604052919050565b6000806040838503121561225457600080fd5b823567ffffffffffffffff8082111561226c57600080fd5b818501915085601f83011261228057600080fd5b8135602082821115612294576122946121c3565b8160051b92506122a58184016121f2565b82815292840181019281810190898511156122bf57600080fd5b948201945b848610156122e957853593506122d984611fd9565b83825294820194908201906122c4565b9997909101359750505050505050565b60006020828403121561230b57600080fd5b8135610c2081611fd9565b60008060006060848603121561232b57600080fd5b833567ffffffffffffffff81111561234257600080fd5b8401610160818703121561235557600080fd5b95602085013595506040909401359392505050565b60008083601f84011261237c57600080fd5b50813567ffffffffffffffff81111561239457600080fd5b6020830191508360208260051b850101111561203d57600080fd5b600080600080600080606087890312156123c857600080fd5b863567ffffffffffffffff808211156123e057600080fd5b6123ec8a838b0161236a565b9098509650602089013591508082111561240557600080fd5b6124118a838b0161236a565b9096509450604089013591508082111561242a57600080fd5b5061243789828a0161236a565b979a9699509497509295939492505050565b6000806040838503121561245c57600080fd5b823561246781611fd9565b946020939093013593505050565b600067ffffffffffffffff83111561248f5761248f6121c3565b6124c060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f860116016121f2565b90508281528383830111156124d457600080fd5b828260208301376000602084830101529392505050565b600082601f8301126124fc57600080fd5b610c2083833560208501612475565b6000806040838503121561251e57600080fd5b823561252981611fd9565b9150602083013567ffffffffffffffff81111561254557600080fd5b612551858286016124eb565b9150509250929050565b6000806000806060858703121561257157600080fd5b843561257c81611fd9565b935060208501359250604085013567ffffffffffffffff81111561259f57600080fd5b6125ab87828801611ffb565b95989497509550505050565b60008060008060008060008060a0898b0312156125d357600080fd5b88356125de81611fd9565b975060208901356125ee81611fd9565b9650604089013567ffffffffffffffff8082111561260b57600080fd5b6126178c838d0161236a565b909850965060608b013591508082111561263057600080fd5b61263c8c838d0161236a565b909650945060808b01359150808211156120d457600080fd5b60005b83811015612670578181015183820152602001612658565b8381111561123c5750506000910152565b60208152600082518060208401526126a0816040850160208701612655565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600080604083850312156126e557600080fd5b82359150602083013567ffffffffffffffff81111561254557600080fd5b60008060008060008060a0878903121561271c57600080fd5b863561272781611fd9565b9550602087013561273781611fd9565b94506040870135935060608701359250608087013567ffffffffffffffff81111561276157600080fd5b61243789828a01611ffb565b60006020828403121561277f57600080fd5b813567ffffffffffffffff81111561279657600080fd5b8201601f810184136127a757600080fd5b611f8d84823560208401612475565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612845576128456127e5565b5060010190565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261288157600080fd5b83018035915067ffffffffffffffff82111561289c57600080fd5b60200191503681900382131561203d57600080fd5b6000602082840312156128c357600080fd5b5051919050565b600181811c908216806128de57607f821691505b602082108103612917577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612955576129556127e5565b500290565b6000825161296c818460208701612655565b9190910192915050565b601f82111561188257600081815260208120601f850160051c8101602086101561299d5750805b601f850160051c820191505b81811015610dcd578281556001016129a9565b815167ffffffffffffffff8111156129d6576129d66121c3565b6129ea816129e484546128ca565b84612976565b602080601f831160018114612a3d5760008415612a075750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555610dcd565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b82811015612a8a57888601518255948401946001909101908401612a6b565b5085821015612ac657878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354612ae4816128ca565b60018281168015612afc5760018114612b2f57612b5e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0084168752821515830287019450612b5e565b8760005260208060002060005b85811015612b555781548a820152908401908201612b3c565b50505082870194505b5092969550505050505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220ec5ef0722658457c5ff85cb823283208680d90e64d6c24bd13915bd8226ff76964736f6c634300080f0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "_entryPoint";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "accountImplementation";
        readonly outputs: readonly [{
            readonly internalType: "contract SparkAccountMulti";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "customerNo";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }];
        readonly name: "createAccount";
        readonly outputs: readonly [{
            readonly internalType: "contract SparkAccountMulti";
            readonly name: "ret";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "customerNo";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }];
        readonly name: "getAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): SparkAccountMultiFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SparkAccountMultiFactory;
}
export {};
