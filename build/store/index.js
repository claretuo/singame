"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = __importDefault(require("./test"));
const signIn_1 = __importDefault(require("./signIn"));
exports.default = {
    test: test_1.default,
    signIn: signIn_1.default,
};
