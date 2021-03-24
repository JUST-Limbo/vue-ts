// 字符串类型
let aName: string = '貂蝉'
// 数值类型
let dAge: number = 18
dAge = 18.13
dAge = -13
// 布尔类型
let isSingleDog: boolean = true
isSingleDog = false
// isSingleDog = 1

// undefined和null
let undef: undefined = undefined
let nul: null = null

// 数组
let arrJS = [1, 'a', true, [], {}]
let arrHero: string[] = ['aaa', 'bbb', 'ccc']
let arrHeroAge: number[] = [1, 2, 3]

let arrHeroAge2: Array<number> = [1, 2, 3]

// 元祖
// 表示一个已知元素数量和类型的数组，各元素的类型不必相同
let x: [string, number, boolean]
x = ['hello', 1, false]

// 枚举
enum Gender {
  Boy = 1,
  Girl = 2,
  Unknown = 3
}
console.log(Gender.Boy)
console.log(Gender.Girl)
console.log(Gender.Unknown)
// 枚举 由value找到key
let sex: string = Gender[2]
console.log(sex)

// any
// void
