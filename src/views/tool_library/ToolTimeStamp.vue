<template>
  <div class="toolTime-stamp">
    <!-- 时间戳转换工具 -->
    <div class="stamp-title">现在是北京时间: {{ time }}</div>
    <div class="stamp-box">
      <div class="box-list">
        时间戳:
        {{ dateFormat }}
        <i @click="copyBtn" class="iconfont ic-copy icon-fuzhi"></i>
        <el-button
          type="danger"
          style="width: 30px; margin: 0 10px 0 10px"
          size="small"
          @click="switchBtn(), clickOt($event)"
        >
          <i
            v-if="istime"
            title="暂停"
            class="iconfont ic-suppress icon-zanting"
          ></i>
          <i
            v-if="!istime"
            title="启动"
            class="iconfont ic-suppress icon-zanting1"
          ></i>
        </el-button>
      </div>
      <div class="box-list">
        时间戳转时间:&nbsp;&nbsp;
        <el-input
          placeholder="请输入时间戳"
          v-model="inputStamp"
          style="width: 200px"
          clearable
        />

        <el-select
          v-model="timeDigit"
          placeholder="请选择"
          clearable
          size="small"
          style="width: 100px; margin: 0 10px 0 10px"
        >
          <el-option label="秒" value="1" />
          <el-option label="毫秒" value="2" />
        </el-select>

        <el-button
          type="primary"
          style="width: 50px; margin: 0 10px 0 10px"
          size="small"
          @click="transferDate(), clickOt($event)"
        >
          <i class="iconfont ic-suppress icon-zhuanhuan"></i>
        </el-button>
        <el-input v-model="inputDate" style="width: 200px" clearable />
        <el-button
          type="primary"
          style="width: 50px; margin: 0 10px 0 10px"
          size="small"
          @click="resetTime(), clickOt($event)"
        >
          <i class="iconfont ic-suppress icon-shuaxin-zhongzhi-07"></i>
        </el-button>
      </div>
      <div class="box-list">
        时间转时间戳:&nbsp;&nbsp;
        <!-- <el-input
        placeholder="请输入时间"
        v-model="inputStampNoun"
        style="width: 200px"
        clearable
      /> -->
        <el-date-picker
          v-model="inputStampNoun"
          type="datetime"
          style="width: 200px"
          size="small"
        />
        <el-button
          type="primary"
          style="width: 50px; margin: 0 10px 0 10px"
          size="small"
          @click="transferDateNoun(), clickOt($event)"
        >
          <i class="iconfont ic-suppress icon-zhuanhuan"></i>
        </el-button>

        <el-select
          v-model="timeDigitNoun"
          placeholder="请选择"
          clearable
          size="small"
          style="width: 100px; margin: 0 10px 0 10px"
        >
          <el-option label="秒" value="1" />
          <el-option label="毫秒" value="2" />
        </el-select>

        <el-input v-model="inputDateNoun" style="width: 200px" clearable />
        <el-button
          type="primary"
          style="width: 50px; margin: 0 10px 0 10px"
          size="small"
          @click="resetTimeNoun(), clickOt($event)"
        >
          <i class="iconfont ic-suppress icon-shuaxin-zhongzhi-07"></i>
        </el-button>
      </div>
      <div class="box-introduce">
        <div class="introduce-title">『&nbsp; 工具简介 &nbsp;』</div>
        <div class="introduce-usage">
          秒: 表示11位时间戳 &nbsp;|&nbsp; 毫秒: 表示13位时间戳
          <br />
          <p>
            <i class="iconfont icon-zhuanhuan"></i>
            转换 &nbsp;|&nbsp;
            <i class="iconfont icon-shuaxin-zhongzhi-07"></i>
            重置 &nbsp;|&nbsp;
            <i class="iconfont ifor-ic icon-shijian"></i>
            日期时间选择器
          </p>
        </div>
        <div class="introduce-text">
          Unix
          时间戳是从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数，不考虑闰秒。
        </div>
        <div class="introduce-text">
          时间戳是指格林威治时间1970年01月01日00时00分00秒(北京时间1970年01月01日08时00分00秒)起至现在的总秒数。
        </div>
      </div>
      <!-- <div v-for="item in 120">{{item}}</div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      time: "",
      controlTime: null,
      dateFormat: "",
      inputStamp: "", // 时间戳
      inputDate: "", // 日期
      inputStampNoun: "", // 时间戳
      inputDateNoun: "", // 日期
      timeDigit: "1", // 位数
      timeDigitNoun: "1", // 位数
      istime: true,
    };
  },
  created() {
    this.dynamicTime();
  },
  beforeUnmount() {
    this.uninstallTap();
  },
  mounted() {
    this.timingTap();
  },
  methods: {
    clickOt(event) {
      this.$func.unFons(event);
    },
    transferDate() {
      // 时间戳转日期
      this.inputDate = "";
      this.inputDate = this.dateFormatConvert(this.inputStamp);
    },
    resetTime() {
      // 时间戳转日期重置
      this.inputStamp = "";
      this.timeDigit = "1";
      this.inputDate = "";
    },
    transferDateNoun() {
      // 日期转时间戳
      this.inputDateNoun = this.timeStampConvertNoun(this.inputStampNoun);
    },
    resetTimeNoun() {
      // 日期转时间戳重置
      this.inputStampNoun = "";
      this.timeDigitNoun = "1";
      this.inputDateNoun = "";
    },
    uninstallTap() {
      if (this.controlTime) {
        clearInterval(this.controlTime);
      }
    },
    switchBtn() {
      this.istime = !this.istime;
      if (!this.istime) {
        clearInterval(this.controlTime);
      } else {
        this.timingTap();
      }
    },
    timingTap() {
      this.controlTime = setInterval(() => {
        this.dynamicTime();
      }, 1000);
    },
    copyBtn() {
      // 复制文本
      const el = document.createElement("input");
      el.setAttribute("value", this.dateFormat);
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
    dynamicTime() {
      const date = new Date(); // 时间
      const year = date.getFullYear(); // 年
      const month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1; // 月
      const week = date.getDay(); // 周名
      const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(); // 日
      const hours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours(); // 时
      const minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(); // 分
      const seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(); // 秒
      const weekArr = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      this.time =
        year +
        "年" +
        month +
        "月" +
        day +
        "日 " +
        weekArr[week] +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
      let realDat =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
      this.dateFormat = this.timeStampConvert(realDat);
    },
    timeStampConvert(nS) {
      // 日期转换时间戳
      let date = new Date(nS);
      let time = date.getTime() / 1000;
      return time;
    },
    timeStampConvertNoun(nS) {
      // 日期转换时间戳
      //   let date = nS;
      let date = new Date(nS);
      let time = null;
      if (this.timeDigitNoun == 1) {
        time = date.getTime() / 1000;
      } else if (this.timeDigitNoun == 2) {
        time = date.getTime();
      }
      return time;
    },
    dateFormatConvert(nS) {
      // 时间戳转换日期
      let date = null; // 时间
      if (this.timeDigit == 1) {
        date = new Date(parseInt(nS) * 1000);
      } else if (this.timeDigit == 2) {
        date = new Date(parseInt(nS));
      }
      const year = date.getFullYear() + "-"; // 年
      const month =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-"; // 月
      const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(); // 日
      const hours =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":"; // 时
      const minutes =
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":"; // 分
      const seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(); // 秒
      return year + month + day + " " + hours + minutes + seconds;
      //   return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ');
    },
  },
};
</script>

<style lang="less" scoped>
// 严格模式下必须存在内容
.toolTime-stamp {
  width: 100%;
  height: 100%;
  // background-color: rgb(126, 35, 35);
  //   background-color: aquamarine;
  padding: 20px 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none; // firefox
  -ms-overflow-style: none; // IE10+
  .stamp-title {
    width: 100%;
    height: 25px;
    font-size: 18px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    // background-color: #fff;
  }
  .stamp-box {
    width: 100%;
    font-size: 18px;
    box-sizing: border-box;
    margin: 20px 0;
    // background-color: red;
    .box-list {
      width: 100%;
      height: 25px;
      font-size: 18px;
      display: flex;
      border-left: 5px solid #000;
      box-sizing: border-box;
      padding: 0 10px;
      margin: 25px 0;
      .ic-copy {
        color: #000;
        font-size: 20px;
        margin: 2px 0 0 10px;
        cursor: pointer;
      }
    }
    .box-introduce {
      width: 100%;
      margin-top: 50px;
      box-sizing: border-box;
      display: flex;
      flex-flow: column nowrap;
      .introduce-title {
        font-size: 18px;
        color: #000;
        width: 100%;
        height: 30px;
        // background-color: rgb(74, 11, 11);
      }
      .introduce-usage {
        width: 100%;
        font-size: 18px;
        box-sizing: border-box;
        margin-top: 25px;
        .ifor-ic {
          color: #000;
          font-size: 18px;
          font-weight: 900;
        }
      }
      .introduce-text {
        width: 100%;
        height: 25px;
        font-size: 18px;
        display: flex;
        box-sizing: border-box;
        margin-top: 25px;
      }
    }
  }
}
.toolTime-stamp::-webkit-scrollbar {
  // 伪类隐藏滚动条 ---Chrome/Safari
  display: none;
}
</style>
