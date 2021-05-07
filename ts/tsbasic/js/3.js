"use strict";
var Color;
(function (Color) {
    Color[Color["c1"] = 1] = "c1";
    Color[Color["c2"] = 2] = "c2";
})(Color || (Color = {}));
var color1 = Color.c1;
var key1 = Color[color1];
// console.log(typeof color1)
// console.log(key1)
// console.log(typeof key1)
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a]; // "A"
