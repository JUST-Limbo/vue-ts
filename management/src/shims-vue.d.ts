declare module '*.vue' {
  import Vue from 'vue'
  declare global {
    namespace Ajax {
      interface AjaxRsp {
        errno: number,
        errmsg: string,
        data: any
      }
    }
  }
  export default Vue
}
