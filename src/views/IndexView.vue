<template>
  <div class="index-view">
    <header>
      <SystemHeader></SystemHeader>
    </header>
    <main>
      <el-config-provider :locale="local">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="$route.path" />
          </transition>
        </router-view>
      </el-config-provider>
    </main>
    <footer>
      <SystemFooter></SystemFooter>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import SystemHeader from "@/components/SystemHeader.vue";
import SystemFooter from "@/components/SystemFooter.vue";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
export default {
  components: {
    SystemHeader,
    SystemFooter,
  },
  data() {
    return {
      local: zhCn,
    };
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
// 严格模式下必须存在内容
.index-view {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #f5f5f5;
  header {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
  }
  main {
    width: 80%;
    height: calc(100% - 150px);
    box-sizing: border-box;
    margin: 0 auto;
  }
  footer {
    width: 100%;
    height: 100px;
  }
}
</style>
