<template>
  <div class="toolGenerate-qrcode">
    <!-- 生成二维码 -->
    6翻了
    <!-- <div v-for="item in 120">{{item}}</div> -->
    <el-button type="primary" v-throttle="1000" @click="butThrottle"
      >Primary</el-button
    >
    <el-button  @click="butThrottles"
      >fg</el-button
    >
    <el-input v-model="input" style="width: 300px" placeholder="Please input" />
    <div></div>
    <input v-focus />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      input: "",
    };
  },
  mounted() {},
  directives: {
    focus: function (el) {
      el.focus();
    },
  },
  methods: {
    throttle(func, delay) {
      var timer = null;
      var startTime = Date.now();
      return function () {
        // 结束时间
        var curTime = Date.now();
        // 间隔时间 = 延迟的时间 - （结束时间戳 - 开始时间戳）
        var interval = delay - (curTime - startTime);
        var th = this;
        var args = arguments;
        clearTimeout(timer);
        if (interval <= 0) {
          // 证明可以触发了
          func.apply(th, args);
          // 重新计算开始时间
          startTime = Date.now();
        } else {
          // 继续等待
          timer = setTimeout(func, interval);
        }
      };
    },
    butThrottle() {
      console.log("6翻了");
    },
    butThrottles() {
    let timer;
      console.log("6翻了冰冰子");
        function fn() {
            if(timer){
                clearTimeout(timer);
            } else {
                timer = setTimeout(()=>{
            console.log("冰冰子")
        },1000);
            }
        
    }
    fn()
    },
    debounce1(fn, wait) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(fn, wait);
    }
}

  },
};
</script>

<style lang="less" scoped>
// 严格模式下必须存在内容
.toolGenerate-qrcode {
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none; // firefox
  -ms-overflow-style: none; // IE10+
}
.toolGenerate-qrcode::-webkit-scrollbar {
  // 伪类隐藏滚动条 ---Chrome/Safari
  display: none;
}
</style>
