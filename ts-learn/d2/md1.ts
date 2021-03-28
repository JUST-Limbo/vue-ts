let num1: number = 100

function func() {
  console.log('这是md1中的func函数')
}

class Dog {
  eat() {
    console.log('dog的实例方法 吃')
  }
}

// import { num1, func, Dog } from './md1'
// export {
//   num1, func, Dog
// }

export default {
  num1, func, Dog
}
