export namespace A { // 独立的命名空间  内部模块
  export let num1: number = 100

  function func() {
    console.log('这是md1中的func函数')
  }

  class Dog {
    eat() {
      console.log('dog的实例方法 吃')
    }
  }
}

namespace B {
  let num1: number = 100

  function func() {
    console.log('这是md1中的func函数')
  }

  class Dog {
    eat() {
      console.log('dog的实例方法 吃')
    }
  }
}
console.log(A.num1)
