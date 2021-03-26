function add(x: number, y: number): number {
  return x + y
}
let myadd = function (x: number, y: number): number {
  return x + y
}

// 重载
function func3(name: string): string;
function func3(age: number): string;
function func3(str1: any): string {
  if (typeof str1 == 'string') {
    return ''
  } else {
    return ''
  }
}
// func3(true)
func3(13)
