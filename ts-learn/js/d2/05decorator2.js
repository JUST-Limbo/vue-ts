"use strict";
// 方法装饰器
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logMethod(p) {
    return function (target, methodName, desc) {
        console.log(target);
        console.log(methodName);
        console.log(desc); // desc.value 是被装饰的方法的引用
        var oldMethod = desc.value;
        desc.value = function () {
            var res = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                res[_i] = arguments[_i];
            }
            console.log('执行了sum1');
            return oldMethod.apply(void 0, res);
        };
    };
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.sum1 = function (num1, num2) {
        return num1 + num2;
    };
    __decorate([
        logMethod('123')
    ], MyClass.prototype, "sum1", null);
    return MyClass;
}());
var obj = new MyClass();
obj.sum1(10, 20);
