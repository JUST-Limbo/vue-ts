"use strict";
// 字符串类型
var aName = '貂蝉';
// 数值类型
var dAge = 18;
dAge = 18.13;
dAge = -13;
// 布尔类型
var isSingleDog = true;
isSingleDog = false;
// isSingleDog = 1
// undefined和null
var undef = undefined;
var nul = null;
// 数组
var arrJS = [1, 'a', true, [], {}];
var arrHero = ['aaa', 'bbb', 'ccc'];
var arrHeroAge = [1, 2, 3];
var arrHeroAge2 = [1, 2, 3];
// 元祖
// 表示一个已知元素数量和类型的数组，各元素的类型不必相同
var x;
x = ['hello', 1, false];
// 枚举
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 1] = "Boy";
    Gender[Gender["Girl"] = 2] = "Girl";
    Gender[Gender["Unknown"] = 3] = "Unknown";
})(Gender || (Gender = {}));
console.log(Gender.Boy);
console.log(Gender.Girl);
console.log(Gender.Unknown);
// 枚举 由value找到key
var sex = Gender[2];
console.log(sex);
// any
// void
