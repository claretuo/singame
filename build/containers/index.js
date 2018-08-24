"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./SignIn/index"));
const index_2 = __importDefault(require("./Game/index"));
const index_3 = __importDefault(require("./Main/index"));
const index_4 = __importDefault(require("./Profile/index"));
exports.default = {
    SignIn: index_1.default,
    Game: index_2.default,
    Main: index_3.default,
    Profile: index_4.default
};