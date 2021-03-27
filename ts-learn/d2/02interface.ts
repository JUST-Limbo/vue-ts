// 函数接口
interface funcItf {
  (num1: number, num2: number): number;
}
var sum1: funcItf = function (num1: number, num2: number): number {
  return num1 + num2
}
