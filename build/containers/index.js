"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./SignIn/index"));
const index_2 = __importDefault(require("./Game/index"));
const index_3 = __importDefault(require("./Main/index"));
const index_4 = __importDefault(require("./Profile/index"));
const index_5 = __importDefault(require("./Activity/index"));
const index_6 = __importDefault(require("./Contact/index"));
const index_7 = __importDefault(require("./Wallet/index"));
const index_8 = __importDefault(require("./UserInfo/index"));
const index_9 = __importDefault(require("./UsernameUpdate/index"));
const index_10 = __importDefault(require("./UserBrief/index"));
exports.default = {
    SignIn: index_1.default,
    Game: index_2.default,
    Main: index_3.default,
    Profile: index_4.default,
    Activity: index_5.default,
    Contact: index_6.default,
    Wallet: index_7.default,
    UserInfo: index_8.default,
    UsernameUpdate: index_9.default,
    UserBrief: index_10.default
};
