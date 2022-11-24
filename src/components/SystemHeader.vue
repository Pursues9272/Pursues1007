<template>
  <div
    class="SystemHeader"
    :style="{
      width: locpurwidth,
      height: locpurheight,
      backgroundColor: locpurbackgroundColor,
    }"
  >
    <div class="SystemHeader-box">
      <ul class="box-text">
        <li
          v-for="(item, index) in locpurtext"
          :key="index"
          :style="{
            lineHeight: locpurheight,
            color: locpurcolor[index],
            fontSize: locTextSize,
          }"
        >
          {{ item }}
        </li>
      </ul>
      <ul
        class="box-title"
        :style="[
          copmTitleWidth(),
          {
            right: locTitleWidth,
            lineHeight: locpurheight,
          },
        ]"
      >
        <li
          v-for="(item, index) in titleLength"
          :key="item - 1"
          :style="{
            borderBottomColor: locpurcolor[index],
          }"
        >
          <router-link :to="titleFocus[index].index">
            <i class="iconfont ic-suppress" :class="titleFocus[index].icon"></i>
            {{ titleFocus[index].title }}
          </router-link>
        </li>
      </ul>
      <div
        class="box-setup"
        :style="{
          width: locpurheight,
          right: siginWidth,
          fontSize: locSize,
          paddingTop: locIconTop,
        }"
      >
        <el-icon><Setting color="#000" /></el-icon>
      </div>
      <div
        class="box-sigin"
        :style="{
          width: siginWidth,
          marginTop: siginMargin,
          backgroundImage: locSiginImage,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SystemHeader",
  props: {
    purwidth: {
      type: String,
      default: "100%",
    },
    purheight: {
      type: String,
      default: "50px",
    },
    purbackgroundColor: {
      type: String,
      default: "#fff",
    },
    purtext: {
      type: String,
      default: "Pursues",
    },
    purcolor: {
      type: Array,
      default: () => [
        "#000",
        // "#EA4335",
        // "#FD3F00",
        // "#FBBC05",
        // "#34A853",
        // "#00C7D6",
        // "#153FA5",
        // "#9143CE",
        // "#1542AF",
        // "#003e68",
      ],
    },
  },
  data() {
    return {
      locpurwidth: this.purwidth,
      locpurheight: this.purheight,
      locpurbackgroundColor: this.purbackgroundColor,
      locpurtext: this.purtext,
      locpurcolor: this.purcolor,
      locSiginImage: require("../../public/sigin.jpg"),
      locSize: "25px",
      locTextSize: "28px",
      titleFocus: [
        {
          title: "首页",
          index: "/",
          icon: "icon-shouye",
        },
        // {
        //   title: "模板出售",
        //   index: "/",
        //   icon: "icon-mobankuangjia",
        // },
        {
          title: "技术博客",
          index: "/",
          icon: "icon-jishufuwu",
        },
        {
          title: "动画库",
          index: "/animation/home",
          icon: "icon-donghua",
        },
        {
          title: "工具库",
          index: "/tool/home",
          icon: "icon-gongju",
        },
      ],
      titleLength: 0,
    };
  },
  beforeCreate() {},
  created() {
    this.locTextSize = (parseFloat(this.locpurheight) / 50) * 28 + "px";
    this.locSize = parseFloat(this.locpurheight) / 2 + "px";
    this.titleLength = this.titleQuantity;
  },
  mounted() {
    window.addEventListener("resize", () => {
      let bodyWidth = document.body.clientWidth * 0.8;
      let len =
        parseFloat(this.locpurheight) +
        parseFloat(this.locpurheight) * 0.8 +
        200;
      let titiles = bodyWidth - len;
      let titleNumber = parseInt(titiles / 80);
      let titileFoc = this.titleFocus.length;
      this.titleLength = this.titleLength - 1;
      if (titleNumber > titileFoc) {
        this.titleLength = titileFoc;
      } else {
        if (titleNumber <= 0) {
          this.titleLength = 0;
        } else {
          this.titleLength = titleNumber;
        }
      }
    });
  },
  methods: {
    copmTitleWidth() {
      let len = parseFloat(this.locTitleWidth) + 200 + "px";
      return `width: calc(100% - ${len});`;
    },
  },
  // 计算属性的执行过程在beforeCreate~created之间
  computed: {
    siginWidth() {
      return parseFloat(this.locpurheight) * 0.8 + "px";
    },
    siginMargin() {
      return parseFloat(this.locpurheight) * 0.1 + "px";
    },
    locIconTop() {
      return (
        (parseFloat(this.locpurheight) - parseFloat(this.locSize)) / 2 + "px"
      );
    },
    locTitleWidth() {
      return (
        parseFloat(this.locpurheight) +
        parseFloat(this.locpurheight) * 0.8 +
        "px"
      );
    },
    titleQuantity() {
      let bodyWidth = document.body.clientWidth * 0.8;
      let len =
        parseFloat(this.locpurheight) +
        parseFloat(this.locpurheight) * 0.8 +
        200;
      let titiles = bodyWidth - len;
      let titleNumber = parseInt(titiles / 80);
      let titileFoc = this.titleFocus.length;
      if (titleNumber > titileFoc) {
        return titileFoc;
      } else {
        return titleNumber;
      }
    },
  },
};
</script>

<style lang="less" scoped>
// 严格模式下必须存在内容
.SystemHeader {
  box-sizing: border-box;
  .SystemHeader-box {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
    .box-text {
      padding: 0;
      margin: 0;
      word-spacing: -5;
      user-select: none;
      padding-left: 10px;
      display: inline-block;
      li {
        list-style-type: none;
        display: inline;
        font-weight: 700;
        margin: 0 1px;
      }
    }
    .box-title {
      height: 100%;
      padding: 0;
      margin: 0;
      word-spacing: -5;
      user-select: none;
      display: inline-block;
      position: absolute;
      top: 0;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      align-items: center;
      li {
        list-style-type: none;
        display: inline-block;
        width: 95px;
        height: 100%;
        // background-color: aqua;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        box-sizing: border-box;
        border-bottom-width: 3px;
        border-bottom-style: solid;
        padding-right: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .ic-suppress {
          font-size: 16px;
          margin: 0;
          padding: 0;
        }
        a {
          text-decoration: none;
          color: #000;
        }
      }
      li:last-child {
        .ic-suppress {
          font-size: 18px;
        }
      }
      li:hover {
        // border-top: 3px solid salmon;
        background-color: #e7e5e585;
      }
    }
    .box-setup {
      position: absolute;
      height: 100%;
      text-align: center;
      top: 0;
      box-sizing: border-box;
    }
    .box-sigin {
      height: 80%;
      // background-image: url(../../public/sigin.jpg);
      background-color: #fff;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      position: absolute;
      right: 0;
      top: 0;
      border-radius: 100px;
      border: 2px solid #fff;
      box-sizing: border-box;
    }
  }
}
</style>
