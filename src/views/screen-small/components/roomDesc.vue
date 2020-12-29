<template>
  <div class="roomDesc">
    <div class="roomDesc-up">
      <div class="up-item">
        <div class="up-item-wrapper">
          <div class="up-item-left"></div>
          <div class="up-item-right">
            <div class="right-item">实验室名称：{{ "adasdas" }}</div>
            <div class="right-item">实验室类型：{{ "aczzxvzx" }}</div>
            <div class="right-item">
              实验室状态：

              <div class="item-status">使用中</div>
            </div>
          </div>
        </div>
      </div>
      <div class="up-item">
        <div class="up-item-wrapper">
          <div class="up-item-left"></div>
          <div class="up-item-right">
            <div class="right-item">负责人姓名：{{ "zxcvzxv" }}</div>
            <div class="right-item">联系方式：{{ "zcxvzxc" }}</div>
            <div class="right-item">负责实验室：{{ "1321321" }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 下半部分 -->
    <div class="main-down">
      <div class="main-down-title">
        <img class="pub-title-icon" src="/images/icon-book.svg" />
        实验室介绍
      </div>

      <!-- <div class="main-down-content"> -->
        <pre>
salkjhdkjsah 时刻记得啦；开始就；拉开时间的拉斯加到了；卡上觉得撒开姐打瞌睡；就打算肯德基阿拉山口觉得阿里</pre
        >
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.roomDesc {
  width: 100%;
  height: 100%;
  .roomDesc-up {
    display: flex;
    height: 2.4rem;
    width: inherit;
  }

  .up-item {
    box-sizing: border-box;
    display: flex;
    padding: 0.2rem;
    font-size: 0.2rem;
    border-radius: 0.1rem;
    background: rgba(235, 106, 79, 0.7);
    border-radius: 0.1rem;
    width: 7.78rem;
    height: 100%;
    /* Center slide text vertically */
    .up-item-wrapper {
      height: 100%;
      background: rgba(248, 248, 250, 0.5);
      border-radius: 0.1rem;
      padding: 0.2rem;
      width: 100%;
      display: flex;
      box-sizing: border-box;
      .up-item-left {
        height: 100%;
        flex-shrink: 0;
        width: 1.68rem;
        background: url("/images/laboratory.png") no-repeat 100% 100%;
        margin-right: 0.2rem;
      }
      .up-item-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: left;
        color: #000000;
        .right-item {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          // font-size: 0.16rem;
          font-family: PingFang SC, PingFang SC-Bold;
          font-weight: 700;
          text-align: left;
          color: #000000;
        }

        .item-status {
          position: relative;
          padding-left: 0.3rem;

          &::before {
            position: absolute;
            content: "";
            top: 0.03rem;
            left: 0;
            width: 0.2rem;
            height: 0.2rem;
            background: #00ff21;
            border-radius: 50%;
          }
        }
      }
    }
  }
  .up-item:nth-child(1) {
    margin-right: 0.3rem;
  }
}
.main-down {
  margin-top: 0.3rem;
  height: 6.89rem;
  border-radius: 0.1rem;
  padding: 0.26rem 0.2rem;
  background-color: rgba(57, 110, 171, 0.7);
  display: flex;
  flex-direction: column;
  .main-down-title {
    height: 0.59rem;
    padding-bottom: 0.24rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 0.26rem;
    img {
      height: 0.35rem;
      width: 0.34rem;
      margin-right: 0.16rem;
    }
  }
  .main-down-content {
    flex: 1;
    position: relative;
  }
  pre {
    flex: 1;
    border-radius: 0.1rem;
    font-size: 0.18rem;
    padding: 0.2rem;
    background-color: rgba(248, 248, 250, 0.5);
    line-height: 0.22rem;
    white-space: pre-wrap;
    word-wrap: break-word;
    margin: 0; 
    // width: 100%;
    height: 100%;
    overflow: auto;
    text-align: left;
    color: #252566;
  }
}
</style>