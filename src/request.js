import axios from "axios";
import router from "./router";
import { ElMessage } from "element-plus";

const instance = axios.create({
  baseURL: "/api",
});

instance.interceptors.response.use((res) => {
  const { status, code, msg } = res.data;
  if (code == 200 || status === 200) {
    return res;
  } else if (code == 401 || status === 401) {
    ElMessage({
      type: "warning",
      message: "身份信息已过期,请重新登录",
    });
    setTimeout(() => {
      router.push("/"); // 登录路由
      // window.localStorage.removeItem("numPerToken");
    }, 1500);
    return Promise.reject(msg);
  }
});

export default instance;
