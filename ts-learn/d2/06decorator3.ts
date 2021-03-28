// 方法装饰器
// 动态追加数组元素
// 每定义一个方法,都可以往数组arr中追加函数名作为数组的元素

let arr: string[] = []

function logMethod(p: any) {
  return function (target: any, methodName: any, desc: any) {
    arr.push(p)
  }
}
function log6(p: any) {
  return function (target: any, methodName: any, desc: any) {
    let oldMethod = desc.value
    desc.value = function () {
      let stime = new Date().getTime()
      let mySum = oldMethod()
      let etime = new Date().getTime()
      let ret = (etime - stime)
      console.log(ret)
      return mySum
    }
  }
}
class MyClass6 {
  @logMethod('eat')
  eat() {

  }
  @logMethod('eat')
  drink() {

  }
  sum6(): number {
    let mySum = 0
    for (let i = 0; i < 1000000; i++) {
      mySum += 1
    }
    return mySum
  }
}
