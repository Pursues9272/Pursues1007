<template>
  <div class="index-view">
    666
    <el-button type="primary" @click="clickOt($event)">点击</el-button>

    <el-button type="success" v-throttle="1000"> 节流指令 </el-button>

    element图标库
    <el-icon><FullScreen /></el-icon>

    <p></p>
    <input
      type="text"
      placeholder="聚焦指令"
      value="自动聚焦指令封装"
      v-focus
    />

    <p></p>
    <el-input v-model="input" style="width: 300px" placeholder="非聚焦指令" />

    <p></p>
    阿里图标库
    <i class="iconfont ic-suppress icon-donghua"></i>
    <i class="iconfont ic-suppress icon-shipin"></i>
    <i class="iconfont ic-suppress icon-jishufuwu"></i>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      input: "组件库输入框",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    clickOt(event) {
      // 单击回归初始状态
      this.$func.unFons(event);
    },
    init() {
      // axios测试
      let httIt = {
        context: "",
        pageNum: 1,
        pageSize: 20,
      };
      console.log(this.$request);
      this.$request
        .post("/backend/backUser/list", httIt)
        .then(({ data: list }) => {
          console.log("list=>", list);
        })
        .catch((error) => {
          console.log("error=>", error);
        });
    },
  },
};
</script>

<style lang="less" scoped>
// 严格模式下必须存在内容
.index-view {
  .ic-suppress {
    font-size: 20px;
    margin: 0 5px;
  }
}
</style>
