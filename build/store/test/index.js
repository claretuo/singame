"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var Test = /** @class */ (function () {
    function Test() {
        var _this = this;
        this.sum = 0;
        this.increase = function () {
            _this.sum++;
        };
        this.decrease = function () {
            _this.sum--;
        };
    }
    __decorate([
        mobx_1.observable
    ], Test.prototype, "sum", void 0);
    __decorate([
        mobx_1.action
    ], Test.prototype, "increase", void 0);
    __decorate([
        mobx_1.action
    ], Test.prototype, "decrease", void 0);
    return Test;
}());
var test = new Test();
exports.default = test;
