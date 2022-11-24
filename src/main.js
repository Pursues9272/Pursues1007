import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "element-plus/theme-chalk/index.css";
import * as ElIconModules from "@element-plus/icons-vue";

const app = createApp(App);
app.use(store);
app.use(router);
for (let iconName in ElIconModules) {
    app.component(iconName, ElIconModules[iconName]);
  }
  app.mount("#app");