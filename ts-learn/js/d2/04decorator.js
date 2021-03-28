"use strict";
// 类装饰器
// 普通装饰器
// function loginClass(p: any) {
//   console.log(p) // 被装饰的类
// }
// @loginClass // 拿着loginClass装饰器装饰MyClass类
// class MyClass {
// }
// @loginClass
// class Dog {
// }
// 装饰器工厂
// function loginClass(p: any) {
//   return function (target: any) {
//     console.log(target)
//     console.log(p)
//   }
// }
// @loginClass('123') // 语法糖
// class MyClass {
// }
// 属性装饰器
// function logProperty(p: any) {
//   return function (target: any, attr: any) {
//     console.log(target) // 对于静态成员是类的构造函数,对于实例成员是类的原型对象
//     console.log(attr) // 被装饰的属性名
//     console.log(p) // 装饰器参数
//   }
// }
// class MyClass {
//   @logProperty('123')
//   public name: string = '张三'
//   @logProperty('12312312')
//   static gender: string = "男"
// }
