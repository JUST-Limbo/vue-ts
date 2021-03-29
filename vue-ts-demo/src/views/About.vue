<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ firstName }}</p>
    <p>{{ lastName }}</p>
    <p>{{ fullName }}</p>
    <button @click="modifyFullName">修改fullName</button>
    <hr />
    <User
      v-for="item in userList"
      :key="item.id"
      v-bind="item"
      @remove="remove"
      @change-age="changeAge"
      v-model="firstName"
    ></User>
    <hr />
    <p>{{ count }} <button @click="add">+1</button></p>
    <p>{{ filterList.join("-") }}</p>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
import User from "../components/User.vue";
import { AboutStore } from "../store/module/about";

/**
vue-property-decorator
  @Component
  @Watch
  @Prop
  @Model
  @Emit
 */
// export default {
//   name:'About',
//     data(){
//       return {
//         firstName:'123',
//         lastName:'abc'
//       }
//     }
//     computed:{
//       fullName(){
//         return this.firstName+this.lastName
//       }
//     }
// }
interface IUser {
  id: number;
  name: String | Number;
  age: number;
  sex?: number;
}
@Component({
  name: "About",
  components: { User },
})
export default class About extends Vue {
  get count() {
    return AboutStore.count;
  }

  get filterList() {
    return AboutStore.filterList;
  }
  add() {
    AboutStore.updateCount(1);
  }

  created(): void {
    this.fullName = "created";
    AboutStore.getList()
  }
  firstName: string = "123";
  lastName: string = "san";
  userList: Array<IUser> = [
    {
      id: 1,
      name: "abc",
      sex: 1,
      age: 50,
    },
    {
      id: 2,
      name: "abc",
      age: 50,
    },
  ];
  // 计算属性
  get fullName() {
    return this.firstName + this.lastName;
  }
  set fullName(val) {
    const arr = val.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];
  }
  modifyFullName() {
    this.fullName = "li si";
  }
  @Watch("firstName")
  onFirstChange(newVal: any, oldval: any) {
    console.log(oldval, newVal);
  }
  remove(id) {
    console.log(id);
    const index: number = this.userList.findIndex((user) => user.id === id);
    this.userList.splice(index, 1);
  }
  changeAge(id) {
    const user: IUser = this.userList.find((user) => user.id === id)!;
    user.age++;
  }
}
</script>
