<template>
  <div class="SystemNavTop">
    <el-page-header icon="ArrowLeft" @back="onBack">
      <template #content>
        <span> {{ $route.meta.title }} </span>
      </template>
    </el-page-header>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onBack() {
      this.$router.push("/tool/home");
    },
  },
};
</script>

<style lang="less" scoped>
// 严格模式下必须存在内容
.SystemNavTop {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  ::v-deep .el-page-header__content {
    font-size: 16px;
  }
}
</style>
