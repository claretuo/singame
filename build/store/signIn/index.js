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
class SignIn {
    constructor() {
        this.loading = false;
        this.phone = '';
        this.countryList = [];
        this.verifyCode = '';
        this.setCountry = (countryId) => {
            this.countryId = countryId;
        };
        this.setPhone = (phone) => {
            this.phone = phone;
        };
        this.setVerifyCode = (verifyCode) => {
            this.verifyCode = verifyCode;
        };
        this.getCountries = () => {
            const countried = Promise.resolve([
                {
                    id: 1,
                    name: '中国'
                },
                {
                    id: 2,
                    name: '美国'
                },
            ]);
            this.loading = true;
            countried.then((data) => {
                this.loading = false;
                this.countryList = data;
            });
        };
        this.getVerifyCode = () => {
            this.loading = true;
            fetch(`/verifycode/${this.phone}`, { method: 'GET' }).then((result) => {
                return result.json();
            }).then(() => {
                this.loading = false;
            }).catch(e => {
                console.error(e.message);
                react_native_1.Alert.alert(e.message);
                this.loading = false;
            });
        };
        this.login = () => {
            this.loading = true;
            fetch('/verifycode', { method: 'POST', body: JSON.stringify({
                    phone: this.phone,
                    verifyCode: this.verifyCode,
                    countryId: this.countryId
                })
            }).then((result) => {
                return result.json();
            }).then(() => {
                this.loading = false;
            }).catch(e => {
                console.error(e.message);
                react_native_1.Alert.alert(e.message);
                this.loading = false;
            });
        };
        this.forgot = () => {
            this.loading = true;
            fetch('/forgot', {
                method: 'POST', body: JSON.stringify({
                    phone: this.phone,
                    countryId: this.countryId
                })
            }).then((result) => {
                return result.json();
            }).then(() => {
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
], SignIn.prototype, "loading", void 0);
__decorate([
    mobx_1.observable
], SignIn.prototype, "countryId", void 0);
__decorate([
    mobx_1.observable
], SignIn.prototype, "phone", void 0);
__decorate([
    mobx_1.observable
], SignIn.prototype, "countryList", void 0);
__decorate([
    mobx_1.observable
], SignIn.prototype, "verifyCode", void 0);
__decorate([
    mobx_1.action
], SignIn.prototype, "setCountry", void 0);
__decorate([
    mobx_1.action
], SignIn.prototype, "setPhone", void 0);
__decorate([
    mobx_1.action
], SignIn.prototype, "setVerifyCode", void 0);
__decorate([
    mobx_1.action
], SignIn.prototype, "getCountries", void 0);
__decorate([
    mobx_1.action
], SignIn.prototype, "getVerifyCode", void 0);
__decorate([
    mobx_1.action
], SignIn.prototype, "login", void 0);
__decorate([
    mobx_1.action
], SignIn.prototype, "forgot", void 0);
const signIn = new SignIn();
exports.default = signIn;
