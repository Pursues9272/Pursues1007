<template>
  <div
    class="SystemFooter"
    :style="{
      width: locpurwidth,
      height: locpurheight,
      backgroundColor: locpurpurbackgroundColor,
    }"
  >
    <div class="SystemFooter-box">
      <div class="site-statement">
        <span>
          本站提供内容均为个人理解,不保证内容的正确性,通过使用本站内容随之而来的风险与本站无关。
        </span>
      </div>
      <div class="box-footer">
        <div class="footer-officialAccount"></div>
        <div class="footer-personalLinks">
          <span class="personal-text">Pursues</span>
          <i class="iconfont ic-suppress icon-weixin"></i>
          <i class="iconfont ic-suppress icon-weibo"></i>
          <i class="iconfont ic-suppress icon-github"></i>
          <i class="iconfont ic-suppress icon-twitter-fill"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SystemFooter",
  props: {
    purwidth: {
      type: String,
      default: "100%",
    },
    purheight: {
      type: String,
      default: "100px",
    },
    purbackgroundColor: {
      type: String,
      default: "white",
    },
  },
  data() {
    return {
      locpurwidth: this.purwidth,
      locpurheight: this.purheight,
      locpurpurbackgroundColor: this.purbackgroundColor,
    };
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.SystemFooter {
  box-sizing: border-box;
  position: relative;
  z-index: 9;
  .SystemFooter-box {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
    z-index: 9;
    background-color: white;
    .site-statement {
      width: 100%;
      height: 30px;
      background-color: rgba(127, 255, 212, 0.3);
      line-height: 30px;
      text-align: center;
      font-size: 12px;
      border-radius: 5px;
      box-sizing: border-box;
      border: 1px dashed rgba(127, 255, 212, 0.5);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .box-footer {
      width: 100%;
      height: calc(100% - 30px);
      // background-color: rgb(51, 121, 153);
      position: relative;
      box-sizing: border-box;
      .footer-officialAccount {
        width: 50px;
        height: 50px;
        box-sizing: border-box;
        background-color: #000000;
        position: absolute;
        left: 10px;
        top: 10px;
      }
      .footer-personalLinks {
        width: 100px;
        height: 100%;
        position: absolute;
        // background-color: gold;
        box-sizing: border-box;
        padding: 10px;
        right: 0;
        top: 0;
        display: flex;
        flex-flow: row wrap-reverse;
        justify-content: space-between;
        align-items: flex-end;
        .personal-text {
          align-self: center;
          order: 1;
          flex-grow: 1;
          text-align: center;
          .ic-suppress {
            color: #000000;
          }
        }
      }
    }
  }
}
</style>
