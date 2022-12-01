import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/", // PC端首页
    name: "IndexView",
    redirect: "/home",
    component: () => import("@/views/IndexView.vue"),
    children: [
      {
        path: "/home",
        name: "HomePage",
        meta: {
          title: "首页",
        },
        component: () => import("@/views/home_page/HomePage.vue"),
      },
      {
        path: "/tool/home",
        name: "ToolHome",
        meta: {
          title: "工具集",
        },
        component: () => import("@/views/tool_library/ToolHome.vue"),
      },
      {
        path: "/tool/time-stamp",
        name: "ToolTimeStamp",
        meta: {
          title: "时间戳转换工具",
          nav: "tool",
        },
        component: () => import("@/views/tool_library/ToolTimeStamp.vue"),
      },
      {
        path: "/tool/generate-QRcode",
        name: "ToolGenerateQRcode",
        meta: {
          title: "二维码生成工具",
          // title: "防抖/节流dome",
          nav: "tool",
        },
        component: () => import("@/views/tool_library/ToolGenerateQRcode.vue"),
      },
      {
        path: "/tool/video",
        name: "ToolVideo",
        meta: {
          title: "视频处理工具",
          nav: "tool",
        },
        component: () => import("@/views/tool_library/ToolVideo.vue"),
      },
      {
        path: "/tool/demo",
        name: "ToolDemo",
        meta: {
          title: "防抖/节流dome",
          nav: "tool",
        },
        component: () => import("@/views/tool_library/ToolDemo.vue"),
      },
      {
        path: "/animation/home",
        name: "AnimationHome",
        meta: {
          title: "动画库",
        },
        component: () => import("@/views/animation_library/AnimationHome.vue"),
      },
    ],
  },
  {
    path: "/move", // 移动端首页
    name: "MoveIndexView",
    component: () => import("@/views/move/MoveIndexView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
