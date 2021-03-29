<template>
  <div>
    <div>
      firName: <input type="text" :value="firName" @input="onChangeFirName" />
    </div>
    姓名:{{ userName }} 性别:{{ SEX[sex] }} 年龄:{{ age }}
    <button @click="changeAge(id)">年龄+1</button>
    <button @click="remove(id)">删除</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit, Model } from "vue-property-decorator";
enum Sex {
  "男" = 1,
  "女" = 0,
}
@Component({
  name: "User",
})
export default class User extends Vue {
  SEX: any = Sex;
  get userName() {
    return this.name;
  }
  @Model("changeFirstName", { type: String })
  firName!: String;
  @Prop(Number)
  id!: number;
  @Prop([String, Number])
  name!: String | Number;
  @Prop({ type: Number })
  age!: Number;
  @Prop({ type: Number, default: 1 })
  sex!: number;
  @Emit("remove")
  remove(id: number) {
    // 不return,默认把参数传出去
    // return id;
  }
  @Emit() // 不写会默认向外emit一个名为change-age的事件
  changeAge(id: number) {}
  @Emit("changeFirstName")
  onChangeFirName(e: any) {
    return e.target.value;
  }
}
</script>
