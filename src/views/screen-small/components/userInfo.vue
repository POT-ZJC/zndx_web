<template>
  <div class="roomDesc">
    <!-- 实验室人员信息 -->
    <div class="main-down-title">
      <img class="pub-title-icon" src="/images/icon-名片.svg" />
      实验室人员信息
    </div>
    <div class="bottomLoopPlay-box" style="flex: 1">
      <div class="loop-button-prev">
        <img
          src="/images/loop-left.svg"
          alt=""
          @click="mySwiper1.slidePrev()"
        />
      </div>
      <div class="loop-button-next">
        <img
          src="/images/loop-left.svg"
          alt=""
          @click="mySwiper1.slideNext()"
        />
      </div>
      <swiper ref="mySwiper1" :options="swiperOptions1" id="mySwiper1">
        <!-- laboratory-card -->
        <swiper-slide v-for="(item, index) in userList1" :key="index">
          <div class="bottom-loop-item">
            <div class="bottomLoop-item-left">
              <img :src="item.userAvatar || '/images/icon-用户.svg'" alt="" />
            </div>

            <div class="bottomLoop-item-right">
              <div class="right-item">姓名：{{ item.userName || "-" }}</div>
              <div class="right-item">开始时间：{{ item.startTime || "" }}</div>
              <div class="right-item">
                结束时间：
                {{ item.endTime || "-" }}
              </div>
              <div class="right-item">
                备注：
                {{ item.remarks || "-" }}
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="bottomLoopPlay-box" style="flex: 1">
      <div class="loop-button-prev">
        <img
          src="/images/loop-left.svg"
          alt=""
          @click="mySwiper2.slidePrev()"
        />
      </div>
      <div class="loop-button-next">
        <img
          src="/images/loop-left.svg"
          alt=""
          @click="mySwiper2.slideNext()"
        />
      </div>
      <swiper ref="mySwiper2" :options="swiperOptions2" id="mySwiper2">
        <swiper-slide v-for="(item, index) in userList2" :key="index">
          <div class="bottom-loop-item">
            <div class="bottomLoop-item-left">
              <img :src="item.userAvatar || '/images/icon-用户.svg'" alt="" />
            </div>

            <div class="bottomLoop-item-right">
              <div class="right-item">姓名：{{ item.userName || "-" }}</div>
              <div class="right-item">开始时间：{{ item.startTime || "" }}</div>
              <div class="right-item">
                结束时间：
                {{ item.endTime || "-" }}
              </div>
              <div class="right-item">
                备注：
                {{ item.remarks || "-" }}
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    userList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    mySwiper1() {
      return this.$refs.mySwiper1.$swiper;
    },
    mySwiper2() {
      return this.$refs.mySwiper2.$swiper;
    },
  },
  watch: {
    userList: {
      handler(newV, old) {
        if (newV.length && newV.length > 2) {
          const length = newV.length;
          const start = Number(length / 2).toFixed(0);
          this.userList1 = newV.slice(0, Number(start));
          this.userList2 = newV.slice(Number(start));
        }
        console.log(newV);
        console.log(this.userList1);
        console.log(this.userList2);
        // this.mySwiper1.slideTo(0, 500);
        // this.mySwiper2.slideTo(0, 500);
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      swiperOptions1: {
        loop: false,
        speed: 1500,
        slidesPerView: "auto",
        spaceBetween: 15,
        observer:true,
        watchSlidesProgress: true,
      },
      swiperOptions2: {
        loop: false,
        speed: 1500,
        observer:true,
        slidesPerView: "auto",
        spaceBetween: 15,
        watchSlidesProgress: true,
      },
      userList1: [],
      userList2: [],
    };
  },
};
</script>
<style lang="scss" scoped>
.roomDesc {
  width: 100%;
  height: 100%;

  .bottomLoopPlay-box {
    height: 2.77rem;
    position: relative;
    width: 100%;
    padding: 0.3rem 0.9rem;
    border-radius: 0.1rem;
    background: rgba(248, 248, 250, 0.5);
    // box-sizing: border-box;
  }
  .bottomLoopPlay-box:nth-child(3) {
    margin-top: 0.2rem;
  }
  // background: red;
  .loop-button-prev {
    position: absolute;
    display: flex;
    align-items: center;
    height: 2.17rem;
    left: 0.2rem;
    top: 0.3rem;
    width: 0.72rem;
    justify-content: flex-end;
    img {
      cursor: pointer;
      width: 0.6rem;
      height: 0.6rem;
      margin-right: 0.1rem;
      opacity: 0.5;
    }
    &::after {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      width: 0.6rem;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.03),
        rgba(255, 255, 255, 0) 45%,
        rgba(255, 255, 255, 0.39)
      );
    }
  }
  .loop-button-next {
    position: absolute;
    display: flex;
    align-items: center;
    height: 2.17rem;
    right: 0.2rem;
    top: 0.3rem;
    width: 0.72rem;

    img {
      cursor: pointer;
      width: 0.6rem;
      height: 0.6rem;
      transform: rotateY(180deg);
      margin-left: 0.1rem;
      opacity: 0.5;
    }
    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 0.6rem;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.39),
        rgba(255, 255, 255, 0) 45%,
        rgba(255, 255, 255, 0)
      );
    }
  }
  /deep/.swiper-container {
    width: 100%;
    box-sizing: border-box;
    height: 2.17rem;

    // padding: 0 0.15rem;
    // margin-left: auto;
    // margin-right: auto;
  }
  /deep/.swiper-slide {
    box-sizing: border-box;
    padding: 0.3rem 0.2rem;
    border-radius: 0.1rem;
    background: rgba(248, 248, 250, 0.5);
    border-radius: 0.1rem;
    text-align: center;
    width: 6rem;
    height: 100%;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition-property: all;
    .bottom-loop-item {
      // height: 1.31rem;
      height: 100%;
      width: 100%;
      display: flex;
      box-sizing: border-box;
      .bottomLoop-item-left {
        img {
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 1.6rem;
        }
        height: 100%;
        flex-shrink: 0;
        width: 22%;
        min-width: 1.6rem;
        min-height: 1.6rem;
        // background: url("/images/icon-用户.svg") no-repeat 100% 100%;
        margin-right: 0.2rem;
      }
      .bottomLoop-item-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: left;
        color: #000000;
        overflow-y: auto;
        .right-item {
          width: 100%;
          display: flex;
          min-height: 0.3rem;
          // flex-wrap: wrap;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
          font-size: 0.2rem;
          font-family: PingFang SC, PingFang SC-Medium;
          font-weight: 500;
          text-align: left;
          color: #000000;
        }
      }
    }
  }
}
</style>