import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/font/iconfont.css";
import "element-plus/theme-chalk/index.css";
import * as ElIconModules from "@element-plus/icons-vue";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueAxios, axios);
for (let iconName in ElIconModules) {
  app.component(iconName, ElIconModules[iconName]);
}
app.mount("#app");
