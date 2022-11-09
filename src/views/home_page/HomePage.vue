<template>
  <div class="home-page">
    <div class="page-header">
      <div class="header-left">非黑即白</div>
      <div class="header-box">
        <div class="box-left"></div>
        <div class="box-right"></div>
      </div>
      <div class="header-right">认知偏差</div>
    </div>
    <ul class="page-nav">
      <li>
        <span> 工具 </span>
      </li>
      <li>
        <span> 工具 </span>
      </li>
      <li>
        <span> 工具 </span>
      </li>
      <li>
        <span> 工具 </span>
      </li>
    </ul>
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
.home-page {
  width: 100%;
  height: 100%;
  // background-color: #999;
  padding: 15px;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none; // firefox
  -ms-overflow-style: none; // IE10+
  .page-header {
    width: 100%;
    height: 200px;
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    box-sizing: border-box;
    .header-left {
      width: 70%;
      height: 100%;
      background-color: #000;
      color: #fff;
      display: flex;
      align-items: center;
      // justify-content: center;
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 10px;
      box-sizing: border-box;
      padding-left: 20px;
      user-select: none;
    }
    .header-box {
      width: 100px;
      height: 100px;
      // background-color: #999;
      // filter:invert(100%);
      position: absolute;
      top: 50%;
      left: 70%;
      transform: translate(-50%, -50%);
      box-sizing: border-box;
      overflow: hidden;
      border-radius: 100%;
      display: flex;
      flex-flow: row nowrap;
      .box-left {
        width: 50%;
        height: 100%;
        background-color: #fff;
      }
      .box-right {
        width: 50%;
        height: 100%;
        background-color: #000;
      }
    }
    .header-right {
      width: 30%;
      height: 100%;
      background-color: #fff;
      user-select: none;
      color: #000;
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 10px;
      writing-mode: vertical-lr;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      box-sizing: border-box;
      padding-right: 20px;
    }
  }
  .page-nav {
    width: 100%;
    height: 100px;
    // background-color: rgb(5, 25, 25);
    padding: 0;
    margin: 20px 0;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    li {
      list-style-type: none;
      width: 20%;
      height: 100%;
      // background-image: linear-gradient( rgba(255, 255, 255), rgba(153, 153, 153, 0.5),);
      background-color: rgba(255, 255, 255);
      box-sizing: border-box;
      overflow: hidden;
      border-radius: 5px;
      box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      span {
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 5px;
        display: inline-block;
      }
    }
  }
}
.home-page::-webkit-scrollbar {
  // 伪类隐藏滚动条 ---Chrome/Safari
  display: none;
}
</style>
