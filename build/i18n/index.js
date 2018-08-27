"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_i18n_1 = __importDefault(require("react-native-i18n"));
exports.i18n = react_native_i18n_1.default;
const zh_1 = __importDefault(require("./zh"));
const en_1 = __importDefault(require("./en"));
react_native_i18n_1.default.defaultLocale = 'en';
react_native_i18n_1.default.fallbacks = true;
react_native_i18n_1.default.translations = {
    en: en_1.default,
    zh: zh_1.default
};
