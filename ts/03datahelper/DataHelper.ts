class Datahelper {
  dataKey: string;
  primaryKey: string;
  // let dh=new DataHelper('plData','id')
  constructor(dataKey: string, primaryKey: string) {
    this.dataKey = dataKey
    this.primaryKey = primaryKey
  }
  readData(): any {
    let strData: string | null = localStorage.getItem(this.dataKey)
    let arrData: any = []
    if (strData != null) {
      arrData = JSON.parse(strData)
    }
    return arrData
  }
  saveData(arrData: Array<Object>): void {
    let str: string = JSON.stringify(arrData)
    localStorage.setItem(this.dataKey, str)
  }
  addData(conStr: string): number {
    let arr: any = this.readData()
    let obj: any = {
      content: conStr,
    }
    // obj[this.primaryKey]=1
    let newId = arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1;
    obj[this.primaryKey] = newId
    arr.push(obj)
    this.saveData(arr)
    return newId
  }
  removeDataById(id: string | number): boolean {
    let arr: any = this.readData()
    let index = arr.findIndex((ele:any) => {
      return ele[this.primaryKey] == id
    })
    if (index > -1) {
      arr.splice(index, 1)
      this.saveData(arr)
      return true
    }
    return false
  }
}
