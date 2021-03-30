<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'app',
//   components: {
//     HelloWorld
//   }
// }
import HelloWorld from "./components/HelloWorld.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "App",  // 当前组件name属性
  components: { // 注册子组件
    HelloWorld,
  },
  filters: {},  // 过滤器
  directives: {}, // 自定义指令
})
export default class App extends Vue {
  private str: String =
    "If Element is successfully added to this project, you'll see an";
  private handleClick(): void {
    console.log("handleClick");
  }
  // created生命周期
  created() {
    console.log("created生命周期");
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
