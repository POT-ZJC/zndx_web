<template>
  <!-- 小屏-21寸 -->
  <div class="screen-small">
    <Header />
    <div class="screen-small-main">
      <div class="left-nav">
        <div
          class="nav-item"
          v-for="(item, index) in navData"
          :key="index"
          @click="navClick(item,index)"
          :class="{ 'nac-active': item.type === activeNavType }"
        >
          <img :src="item.icon" class="nav-icon" alt="" />
          {{ item.name }}
        </div>
        <!-- <div class="nav-item">
        <img src="/images/icon-用户" class="nav-icon" alt="" />实验室人员信息
      </div>
      <div class="nav-item">
        <img src="/images/icon-闹钟" class="nav-icon" alt="" />预约信息
      </div>
      <div class="nav-item">
        <img src="/images/icon-安全" class="nav-icon" alt="" />实验室安全须知
      </div>
      <div class="nav-item">
        <img src="/images/icon-流程" class="nav-icon" alt="" />操作规程
      </div> -->
      </div>
      <div class="right-main">
        <component :is="activeNavType" />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/index.vue";
import roomDesc from "./components/roomDesc";
import roomSecurity from "./components/roomSecurity";
export default {
  components: { Header, roomDesc,roomSecurity },
  data() {
    return {
      activeNavType: "roomDesc",
      navData: [
        {
          name: "实验室介绍",
          icon: "/images/icon-book.svg",
          type: "roomDesc",
        },
        {
          name: "实验室人员信息",
          icon: "/images/icon-名片.svg",
          type: "roomUser",
        },
        {
          name: "预约信息",
          icon: "/images/icon-闹钟.svg",
          type: "appointment",
        },
        {
          name: "实验室安全须知",
          icon: "/images/icon-安全.svg",
          type: "roomSecurity",
        },
        {
          name: "操作规程",
          icon: "/images/icon-流程.svg",
          type: "operating",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    navClick(data, index) {
      this.activeNavType = data.type;
    },
  },
};
</script>
<style lang="scss" scoped>
.screen-small {
  overflow: hidden;
  padding: 0 0.3rem;
  // opacity: 0.7;
  .screen-small-main {
    margin: 0.13rem 0 0.52rem 0;
    height: 9.6rem;
  }
  .left-nav {
    float: left;
    height: 9.6rem;
    width: 2.44rem;
    background: rgba(98, 228, 182, 1);
    border-radius: 0.1rem;
    padding: 0.2rem;

    .nav-item {
      overflow: hidden;
      margin-top: 0.2rem;
      position: relative;
      line-height: 0.2rem;
      width: 2.02rem;
      height: 1.68rem;
      text-align: center;
      // padding-top: 1rem;
      opacity: 0.6;
      background: linear-gradient(45deg, #4654d7 1%, #03ffab 98%);
      // border: 0.02rem solid #ffffff;
      border-radius: 0.1rem;
      font-size: 0.2rem;
      font-family: PingFang SC, PingFang SC-Medium;
      color: #ffffff;
      .nav-icon {
        margin: 0.4rem auto 0.14rem auto;
        width: 0.5rem;
        height: 0.5rem;
        display: block;
      }
    }
    .nav-item:nth-child(1) {
      margin-top: 0;
    }
    .nac-active {
      opacity: 1;
      border: 0.02rem solid #ffffff;
    }
  }
}
.right-main {
  float: left;
  margin-left: 0.3rem;
  width: 15.86rem;
  height: 100%;
}
</style>