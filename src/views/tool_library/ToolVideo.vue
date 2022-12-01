<template>
  <div class="tool-video">
    <!-- 视频处理工具 -->
    <p>视频处理</p>
    <div class="video-box">
      <canvas id="canvasAccept" width="800" height="400">
        你的游览器不支持canvas,请升级你的游览器。
      </canvas>
      <video
        id="videoTransmit"
        src="../../assets/video/movie2.mp4"
        controls
      ></video>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {};
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    initVideo() {
      // canvas dom
      let canvas = document.getElementById("canvasAccept");
      let context = canvas.getContext("2d"); // 创建二维画布

      let box = document.querySelector(".video-box");
      // video dom
      let video = box.getElementsByTagName("video")[0];
      video.play();
      video.addEventListener("play", function () {
        setInterval(function () {
          // canvas绘制图相方法,图像源
          context.drawImage(video, 0, 50, 450, 250);
          context.putImageData(dealCanvas(), 0, 50);
        }, 20);
      });
      let CHECK_R; // = 30;
      let CHECK_G; // = 150;
      let CHECK_B; // = 35;
      let TOLERANCE = 55;
      function dealCanvas() {
        let frameData = context.getImageData(0, 50, 450, 250);
        let len = frameData.data.length / 4;
        for (var i = 0; i < len; i++) {
          var r = frameData.data[i * 4 + 0],
            g = frameData.data[i * 4 + 1],
            b = frameData.data[i * 4 + 2];
          b = frameData.data[i * 4 + 3];
          if (CHECK_R == undefined) {
            CHECK_R = r;
            CHECK_G = g;
            CHECK_B = b;
          }
          if (
            Math.abs(r - CHECK_R) <= TOLERANCE &&
            Math.abs(g - CHECK_G) <= TOLERANCE &&
            Math.abs(b - CHECK_B) <= TOLERANCE
          ) {
            frameData.data[i * 4 + 3] = 0;
          }
        }
        return frameData;
      }
    },
  },
};
</script>

<style lang="less" scoped>
// 严格模式下必须存在内容
.tool-video {
  width: 100%;
  height: 100%;
  // background-color: rgb(126, 35, 35);
  // background-color: aquamarine;
  padding: 20px 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none; // firefox
  -ms-overflow-style: none; // IE10+
  .video-box {
    width: 100%;
    height: 400px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    #canvasAccept {
      width: 100%;
      height: 100%;
      min-height: 300px;
      background: url(../../assets/image/water.gif) no-repeat;
      background-size: 100% 100%;
      object-fit: contain;
      box-sizing: border-box;
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    #videoTransmit {
      width: 200px;
      height: 200px;
      background-color: rgba(0, 0, 0, 0.4);
      position: absolute;
      z-index: 2;
      bottom: 0;
      right: 0;
      box-sizing: border-box;
      overflow: hidden;
      border-radius: 10px 0 0 0;
    }
  }
}
.tool-video::-webkit-scrollbar {
  // 伪类隐藏滚动条 ---Chrome/Safari
  display: none;
}
</style>
