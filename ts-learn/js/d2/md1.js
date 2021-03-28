"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// import { num1, func, Dog } from './md1'
// export {
//   num1, func, Dog
// }
exports.default = {
    num1: num1, func: func, Dog: Dog
};
