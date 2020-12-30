<template>
  <div id="app">
    <router-view :key="key" />
  </div>
</template>

<script>

import { mutations, store } from "@/store.js";
import { computedFontSize } from "./htmlFontSize";
export default {
  name: "app",
  computed: {
    key() {
      return this.$route.fullPath;
    },
    // htmlSize() {
    //     return store.htmlSize
    // }
  },
  data() {
    return {
      // htmlFontSize: 96, // 默认在1920 宽度的屏幕 ，1920 html根字体=96
      htmlEl: document.querySelector("html"),
    };
  },
  created() {
    mutations.setHtmlSize(computedFontSize(this.htmlEl));

    window.onresize = () => {
      // this.htmlFontSize = computedFontSize(this.htmlEl)
      mutations.setHtmlSize(computedFontSize(this.htmlEl));
    };
  },
  mounted() {},
  destroyed() {
    this.htmlEl.style.fontSize = "14px";
    mutations.setHtmlSize(14);
    window.onresize = () => null;
  },
};
</script>
<style lang="scss">
//  @function torem($px, $base-font-size: 96px) {

// 	@return ($px / $base-font-size) * 1rem;
// }
html,
body {
  -webkit-text-size-adjust: none;
  margin: 0;
  height: 100%;
  min-height: 768px;
  min-width: 1366px;
  font-family: PingFang SC, PingFang SC-Medium;
}
div {
  box-sizing: border-box;
  -webkit-text-size-adjust: none;
  font-family: PingFang SC, PingFang SC-Medium;
}
body {
  background-image: url("/images/bg-img.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
#app {
  height: inherit;
}
.pub-box {
  height: 100%;
}
.pub-title {
  display: flex;
  flex-shrink: 0;
  // align-items: center;
  height: 0.38rem;
  // height: 100%;
  line-height: 0.24rem;
  font-size: 0.16rem;
  font-family: PingFang SC, PingFang SC-Medium;
  font-weight: 500;
  text-align: left;
  color: #ffffff;
  position: relative;
  .pub-title-icon {
    width: 0.24rem;
    height: 0.24rem;
    margin-right: 0.1rem;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: linear-gradient(90deg, #ffffff, rgba(255, 255, 255, 0));
  }
}
</style>
