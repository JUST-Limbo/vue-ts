<template>
  <div class="login">
    <h3>叩丁狼电商管理系统</h3>
    <el-form
      :model="ruleForm"
      label-position="left"
      label-width="40px"
      class="login__rule-form"
      ref="ruleForm"
    >
      <el-form-item label="账号">
        <el-input
          v-model="ruleForm.username"
          placeholder="请输入账号"
          autocomplete="off"
          minlength="6"
          maxlength="20"
          size="small"
          prefix-icon="el-icon-user"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="ruleForm.userpass"
          placeholder="请输入密码"
          autocomplete="off"
          minlength="15"
          maxlength="30"
          size="small"
          prefix-icon="el-icon-lock"
        ></el-input>
      </el-form-item>
      <el-form-item class="login__form-btn">
        <el-button
          type="primary"
          style="width: 100%"
          @click="loginFn('ruleForm')"
          size="small"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from "element-ui/types/form";
import { Component, Vue, Ref } from "vue-property-decorator";
import { LoginApi } from "@/request/api";

interface UserInfo {
  userName: string;
  pwd: string;
}
interface RulesObj {
  required: boolean;
  message: string;
  trigger: string;
}
// 网络请求返回值接口
// interface AjaxRsp {
//   errno: number;
//   errmsg: string;
//   data: any
// }

@Component
export default class Login extends Vue {
  ruleForm: UserInfo = { userName: "", pwd: "" };
  readonly rules: { userName: Array<RulesObj>; pwd: Array<RulesObj> } = {
    userName: [{ required: true, message: "用户名不为空", trigger: "blur" }],
    pwd: [{ required: true, message: "密码不为空", trigger: "blur" }],
  };
  // this.$refs.ruleForm = ruleFormRef
  @Ref("ruleForm") readonly ruleFormRef!: ElForm;
  loginFn(): void {
    // this.$refs.ruleForm.validate((vali) => {});
    this.ruleFormRef.validate(async (vali: boolean) => {
      if (vali) {
        // 发送请求
        let { errno, data, errmsg }: Ajax.AjaxRsp = await LoginApi({
          password: this.ruleForm.pwd,
          userName: this.ruleForm.userName,
        });
        if (errno == 0) {
          localStorage.setItem("token", data.token);
        } else {
          this.$message.error(errmsg);
        }
      }
    });
  }
}
</script>
<style lang="less" scoped>
</style>
