"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = __importStar(require("crypto-js"));
class CryptoService {
    constructor() {
        this.key = "SecretKey123";
    }
    encrypt(data) {
        const ciphertext = CryptoJS.AES.encrypt(data.trim(), this.key.trim()).toString();
        return ciphertext;
    }
    decrypt(data) {
        const bytes = CryptoJS.AES.decrypt(data, this.key.trim());
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        return originalText;
    }
}
const cryptoService = new CryptoService();
exports.default = cryptoService;
