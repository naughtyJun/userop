"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EOASignatureMulti = void 0;
const ethers_1 = require("ethers");
const EOASignatureMulti = (signer) => (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    let signature = "0x";
    for (const s of signer) {
        const oneSignature = yield s.signMessage(ethers_1.ethers.utils.arrayify(ctx.getUserOpHash()));
        signature = signature.concat(oneSignature.slice(2));
    }
    ctx.op.signature = signature;
});
exports.EOASignatureMulti = EOASignatureMulti;
