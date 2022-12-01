<template>
  <div class="animation-home">
    <!-- 动画集 -->
    <div class="home-sear">
      <el-input
        placeholder="请输入内容"
        v-model="searchTool"
        style="width: 300px"
        clearable
      >
      </el-input>
    </div>
    <div class="home-box">
      <div class="box-column"></div>
    </div>
    <!-- <div v-for="item in 120">{{ item }}</div> -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
// 严格模式下必须存在内容
.animation-home {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none; // firefox
  -ms-overflow-style: none; // IE10+
  padding: 15px;
  .home-sear {
    width: 100%;
    height: 50px;
    // background-color: rgb(38, 106, 154);
    display: flex;
    align-items: center;
  }
  .home-box {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
  }
}
.animation-home::-webkit-scrollbar {
  // 伪类隐藏滚动条 ---Chrome/Safari
  display: none;
}
</style>
