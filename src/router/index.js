import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "IndexView",
    component: () => import("@/views/IndexView.vue"),
    children: [
      {
        path: "/tool/home",
        name: "ToolHome",
        meta: {
          title: "工具集",
        },
        component: () => import("@/views/tool_library/ToolHome.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
