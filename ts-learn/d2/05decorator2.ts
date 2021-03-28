// 方法装饰器

function logMethod(p: any) {
  return function (target: any, methodName: any, desc: any) {
    console.log(target)
    console.log(methodName)
    console.log(desc) // desc.value 是被装饰的方法的引用
    let oldMethod = desc.value
    desc.value = function (...res: any[]) {
      console.log('执行了sum1')
      return oldMethod(...res)
    }
  }
}

class MyClass {
  @logMethod('123')
  sum1(num1: number, num2: number): number {
    return num1 + num2
  }
}

let obj = new MyClass()
obj.sum1(10, 20)
