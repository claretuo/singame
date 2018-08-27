"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const react_native_1 = require("react-native");
class Test {
    constructor() {
        this.loading = false;
        this.country = '';
        this.phone = '';
        this.countryList = [];
        this.verifyCode = '';
        this.getVerifyCode = () => {
            this.loading = true;
            fetch(`/verifycode/${this.phone}`, { method: 'GET' }).then((result) => {
                return result.json();
            }).then((verifyCode) => {
                this.verifyCode = verifyCode;
                this.loading = false;
            }).catch(e => {
                console.error(e.message);
                react_native_1.Alert.alert(e.message);
                this.loading = false;
            });
        };
        this.login = () => {
            this.loading = true;
            fetch(`/verifycode/${this.phone}`, { method: 'POST', body: {
                    phone: this.phone,
                    verifyCode: this.verifyCode,
                    country: this.country
                }
            }).then((result) => {
                return result.json();
            }).then((verifyCode) => {
                this.verifyCode = verifyCode;
                this.loading = false;
            }).catch(e => {
                console.error(e.message);
                react_native_1.Alert.alert(e.message);
                this.loading = false;
            });
        };
    }
}
__decorate([
    mobx_1.observable
], Test.prototype, "loading", void 0);
__decorate([
    mobx_1.observable
], Test.prototype, "country", void 0);
__decorate([
    mobx_1.observable
], Test.prototype, "phone", void 0);
__decorate([
    mobx_1.observable
], Test.prototype, "countryList", void 0);
__decorate([
    mobx_1.observable
], Test.prototype, "verifyCode", void 0);
__decorate([
    mobx_1.action
], Test.prototype, "getVerifyCode", void 0);
__decorate([
    mobx_1.action
], Test.prototype, "login", void 0);
const test = new Test();
exports.default = test;
