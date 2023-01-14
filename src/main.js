import "element-plus/theme-chalk/index.css";
import "@/assets/font/iconfont.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import * as ElIconModules from "@element-plus/icons-vue";
import { throttle, focus } from "./components/global_cont/instructions";
import * as func from "./components/global_cont/func";
import request from "./request";

axios.defaults.baseURL = "/api";

const app = createApp(App);
app.directive("throttle", throttle);
app.directive("focus", focus);
app.config.globalProperties.$func = func;
app.config.globalProperties.$request = request;
app.use(store);
app.use(router);
app.use(VueAxios, axios);
for (let iconName in ElIconModules) {
  app.component(iconName, ElIconModules[iconName]);
}
app.mount("#app");
