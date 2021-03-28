

// function getData(val: string): string {
//   return val
// }
// getData('abc')
// function getData1(val: string): string {
//   return val
// }
// function getData2(val: string): string {
//   return val
// }

// 泛型函数定义
// function getData<T>(val: T): T {  // 实参类型和返回值类型取决于<T>的类型
//   return val
// }
// // 使用泛型
// getData<number>(10)
// getData<string>('10')


// 泛型类
// class MyClass {
//   arr: number[] = [];
//   addElem(el: number) {
//     this.arr.push(el)
//   }
//   getSecondElem(): number {
//     return this.arr[1]
//   }
// }
// let obj3 = new MyClass()
// obj3.addElem(10)
// obj3.addElem(12)
// obj3.addElem(30)
// obj3.getSecondElem()
// class MyClass2<T> {
//   arr: T[] = [];
//   addElem(el: T) {
//     this.arr.push(el)
//   }
//   getSecondElem(): T {
//     return this.arr[1]
//   }
// }
// let obj4 = new MyClass2<number>()
// let obj5 = new MyClass2<string>()


// 泛型函数接口方式1
// interface ConfigFn {
//   <T>(val: T): T;
//   // (val: string): string
// }
// let getData: ConfigFn = function <T>(val: T): T {
//   return val
// }
// getData<number>(12)

// 泛型函数接口方式2
interface ConfigFn<T> {
  (val: T): T
}
function getData<T>(val: T): T {
  return val
}
let getStringData: ConfigFn<string> = getData
console.log(getStringData('HELLO'))
