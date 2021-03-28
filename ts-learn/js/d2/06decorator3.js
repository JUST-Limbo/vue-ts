"use strict";
// 方法装饰器
// 动态追加数组元素
// 每定义一个方法,都可以往数组arr中追加函数名作为数组的元素
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var arr = [];
function logMethod(p) {
    return function (target, methodName, desc) {
        arr.push(p);
    };
}
function log6(p) {
    return function (target, methodName, desc) {
        var oldMethod = desc.value;
        desc.value = function () {
            var stime = new Date().getTime();
            var mySum = oldMethod();
            var etime = new Date().getTime();
            var ret = (etime - stime);
            console.log(ret);
            return mySum;
        };
    };
}
var MyClass6 = /** @class */ (function () {
    function MyClass6() {
    }
    MyClass6.prototype.eat = function () {
    };
    MyClass6.prototype.drink = function () {
    };
    MyClass6.prototype.sum6 = function () {
        var mySum = 0;
        for (var i = 0; i < 1000000; i++) {
            mySum += 1;
        }
        return mySum;
    };
    __decorate([
        logMethod('eat')
    ], MyClass6.prototype, "eat", null);
    __decorate([
        logMethod('eat')
    ], MyClass6.prototype, "drink", null);
    return MyClass6;
}());
