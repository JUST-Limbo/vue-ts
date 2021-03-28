"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var A;
(function (A) {
    A.num1 = 100;
    function func() {
        console.log('这是md1中的func函数');
    }
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.eat = function () {
            console.log('dog的实例方法 吃');
        };
        return Dog;
    }());
})(A = exports.A || (exports.A = {}));
var B;
(function (B) {
    var num1 = 100;
    function func() {
        console.log('这是md1中的func函数');
    }
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.eat = function () {
            console.log('dog的实例方法 吃');
        };
        return Dog;
    }());
})(B || (B = {}));
console.log(A.num1);
