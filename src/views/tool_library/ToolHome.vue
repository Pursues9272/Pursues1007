<template>
  <div class="tool-home">
    <!-- 工具集 -->
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
      <div
        class="box-column"
        v-for="(item, index) in contToolTtem"
        :key="index"
        :class="[item.subIts.length !== 5 ? 'box-list-control' : '']"
      >
        <div
          class="box-list"
          v-for="(It, sub) in item.subIts"
          :key="sub"
          @click="switchOp(It)"
        >
          <div class="list-title">
            「{{ It.title }}」
            <i class="iconfont ic-suppress icon-shijian"></i>
          </div>
          <div class="list-content">时间/时间戳转换</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      searchTool: "", // 搜索
      toolTtem: [
        {
          icon: "icon-shijian",
          title: "时间转换",
          index: "/tool/time-stamp",
        },
        {
          icon: "icon-shijian",
          title: "时间转换2",
        },
        {
          icon: "icon-shijian",
          title: "时间转换3",
        },
        {
          icon: "icon-shijian",
          title: "时间转换4",
        },
        {
          icon: "icon-shijian",
          title: "时间转换5",
        },
        {
          icon: "icon-shijian",
          title: "时间转换6",
        },
        {
          icon: "icon-shijian",
          title: "时间转换7",
        },
        {
          icon: "icon-shijian",
          title: "时间转换8",
        },
        {
          icon: "icon-shijian",
          title: "时间转换9",
        },
        {
          icon: "icon-shijian",
          title: "时间转换10",
        },
        {
          icon: "icon-shijian",
          title: "时间转换11",
        },
        {
          icon: "icon-shijian",
          title: "时间转换12",
        },
      ],
      colToolNum: 0,
      contToolTtem: [],
    };
  },
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    init() {
      // this.colToolNum
      let remainder = this.toolTtem.length % 5;
      let quantityCol = Math.trunc(this.toolTtem.length / 5);
      if (remainder !== 0) {
        quantityCol += 1;
      }
      this.colToolNum = quantityCol;
      console.log("tol=>", quantityCol);
      for (let i = 1; i <= quantityCol; i++) {
        console.log(i);
        let subIt = [];
        let subLen = i * 5;
        let sub = (i - 1) * 5;
        for (let j = 0; j < 5; j++) {
          if (subLen === 5) {
            subIt.push(this.toolTtem[j]);
          } else {
            if (this.toolTtem[sub + j] !== undefined) {
              subIt.push(this.toolTtem[sub + j]);
            }
          }
        }
        this.contToolTtem.push({
          subIts: subIt,
        });
      }
      console.log("tols=>", this.contToolTtem);
      // this.contToolTtem
    },
    switchOp(item) {
      // console.log("switchOp=>",item)
      this.$router.push(item.index);
    },
  },
};
</script>

<style lang="less" scoped>
// 严格模式下必须存在内容
.tool-home {
  width: 100%;
  height: 100%;
  // background-color: aquamarine;
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
    // background-color: rgb(207, 114, 27);
    display: flex;
    flex-flow: column nowrap;
    .box-column {
      width: 100%;
      height: 120px;
      // background-color: rgb(64, 28, 28);
      margin: 10px 0;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      .box-list {
        width: calc(20% - 20px);
        height: 80px;
        background-color: #fff;
        border-radius: 5px;
        box-sizing: border-box;
        overflow: hidden;
        padding: 8px;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.16);
        cursor: pointer;
        .list-title {
          width: 100%;
          height: 30px;
          // background-color: green;
          color: #000;
          font-size: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .ic-suppress {
            font-size: 16px;
            margin: 0;
            padding: 0;
            color: #000;
          }
        }
        .list-content {
          display: flex;
          align-items: center;
          font-size: 14px;
          padding: 0 5px;
          box-sizing: border-box;
          padding-left: 10px;
        }
      }
    }
    .box-list-control {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      .box-list {
        margin-right: 25px;
      }
    }
    // .box-list {
    //   width: 150px;
    //   height: 50px;
    //   background-color: #fff;
    //   margin: 10px;
    // }
  }
}
.tool-home::-webkit-scrollbar {
  // 伪类隐藏滚动条 ---Chrome/Safari
  display: none;
}
</style>
