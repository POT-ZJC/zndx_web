<template>
  <!-- 大屏-41寸 -->
  <div class="screen-big">
    <Header />
    <!--  顶部实验室轮播 -->
    <div class="top-loopPlay">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <!-- 实验室 -->
    <div class="center-main">
      <!-- 左侧布局 -->
      <div class="left-content">
        <!-- 负责人 -->
        <div class="left-user">
          <div class="pub-title">
            <img class="pub-title-icon" src="/images/icon-用户.svg" />
            实验室负责2人
          </div>
          <div class="userInfo-main">
            <div class="user-head">
              <img src="/images/icon-用户.svg" alt="" />
            </div>
            <div class="userInfo-desc">
              <div class="desc-item">负责人姓名：XXX</div>
              <div class="desc-item">联系方式：XXX</div>
              <div class="desc-item">负责实验室：XXX</div>
            </div>
          </div>
        </div>
        <!-- 实验室介绍 -->
        <div class="left-desc">
          <div class="pub-box">
            <div class="pub-title">
              <img class="pub-title-icon" src="/images/icon-book.svg" />
              实验室介绍
            </div>
            <div class="left-desc-content">
              <pre>
复制文本
滴答滴答……雨打着窗，我不耐烦的把那道解了许久也没解出的数学题丢在一旁，支着脑袋，专心的看起窗外的风景来。 离我窗台的不远处长着一棵大树，郁郁葱葱、枝繁叶茂，无一不显现出这棵树的生机。也许是这棵树安宁的绿色渲染了我，这几天的烦闷竟有点消逝。 咦，似乎有什么动静。 我定盯一看，是一只蛹，一只将要破茧而出的小生物。我并不知道它的名字。 它挣扎着，连带着树叶也在跟着颤抖，碧绿的叶子上的水珠也被晃了下来。一滴、两滴，如同打在我窗上的声音一样好听，我想。 几分钟过去了，树叶还在颤抖，只是没有水珠的滴落了，只剩它一个，像是一个冬夜晚回家的孩子，害怕挨打，抱住自己的双臂在瑟瑟发抖。它心里一定是焦急的，我想。 二十多分钟，它终于探出了小半的身子，然而树叶却停止了颤抖。它，是要放弃吗？它不能放弃！ 我直直的望着它，思绪却飘回那个雨天。 那天，是和这会一样的天气，阴雨绵绵，烟雾朦胧，竟让人徒生几分诗意。就是这样的一个阴雨天气，我却经历了一个心灵变化的过程。 可能是因为在家里是最小的那一个，所以很多事处理都欠妥当，比如，人情世故。于是，上周我便和小A发生了争执，本来是一件小事，但发展到后来连同学之间的友谊都有了裂缝。 事情是这样的，小A向我请教一道数学题，当时我正在解，便很不耐烦的说：“吵什么吵！不看见我正在解吗！”也许是我语气太过恶劣，小A再没有多说</pre
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 中间布局 -->
      <div class="center-content">
        <!-- 预约信息 -->
        <div class="center-up">
          <div class="pub-title">
            <img class="pub-title-icon" src="/images/icon-闹钟.svg" />
            预约信息
          </div>
          <div class="table-box">
            <table>
              <thead>
                <tr>
                  <!-- <th>序号</th>
                  <th>实验室</th>
                  <th>预约时间</th>
                  <th>人员</th>
                  <th>预约状态</th>
                  <th>备注</th> -->

                  <td>序号</td>
                  <td>实验室</td>
                  <td>预约时间</td>
                  <td>人员</td>
                  <td>预约状态</td>
                  <td>备注</td>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in tableData"
                  :key="index"
                  :style="`background:${
                    index & 1
                      ? 'rgba(228,242,255,0.5)'
                      : 'rgba(255,255,255,0.5)'
                  } ;`"
                >
                  <td>{{ item.index }}</td>
                  <td>{{ item.unit }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.user }}</td>
                  <td>{{ item.status }}</td>
                  <td>{{ item.desc }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- -->
        <div class="center-down">
          <!-- 实验室-人员信息轮播 -->
          <div class="center-down-left">
            <div class="pub-box">
              <div class="pub-title">
                <img class="pub-title-icon" src="/images/icon-名片.svg" />
                实验室人员信息
              </div>
              <div>实验室-人员信息轮播</div>
            </div>
          </div>
          <!-- 实验室视频 -->
          <div class="center-down-right">
            <div class="pub-box">
              <div class="pub-title">
                <img class="pub-title-icon" src="/images/icon-播放.svg" />
                实验室内部视频
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧布局 -->
      <div class="right-content">
        <!-- 安全需知 -->
        <div class="right-up">
          <div class="pub-title">
            <img class="pub-title-icon" src="/images/icon-安全.svg" />
            安全需知
          </div>
          <div class="security-desc-content">
            <pre>
  滴答滴答……雨打着窗，我不耐烦的把那道解了许久也没解出的数学题丢在一旁，支着脑袋，专心的看起窗外的风景来。
  离我窗台的不远处长着一棵大树，郁郁葱葱、枝繁叶茂，无一不显现出这棵树的生机。也许是这棵树安宁的绿色渲染了我，这几天的烦闷竟有点消逝。
  咦，似乎有什么动静。
  我定盯一看，是一只蛹，一只将要破茧而出的小生物。我并不知道它的名字。
  它挣扎着，连带着树叶也在跟着颤抖，碧绿的叶子上的水珠也被晃了下来。一滴、两滴，如同打在我窗上的声音一样好听，我想。
  几分钟过去了，树叶还在颤抖，只是没有水珠的滴落了，只剩它一个，像是一个冬夜晚回家的孩子，害怕挨打，抱住自己的双臂在瑟瑟发抖。它心里一定是焦急的，我想。
  二十多分钟，它终于探出了小半的身子，然而树叶却停止了颤抖。它，是要放弃吗？它不能放弃！
  我直直的望着它，思绪却飘回那个雨天。
  那天，是和这会一样的天气，阴雨绵绵，烟雾朦胧，竟让人徒生几分诗意。就是这样的一个阴雨天气，我却经历了一个心灵变化的过程。
  可能是因为在家里是最小的那一个，所以很多事处理都欠妥当，比如，人情世故。于是，上周我便和小A发生了争执，本来是一件小事，但发展到后来连同学之间的友谊都有了裂缝。
  事情是这样的，小A向我请教一道数学题，当时我正在解，便很不耐烦的说：“吵什么吵！不看见我正在解吗！”也许是我语气太过恶劣，小A再没有多说什么，拿着习题就走了。神色也有些愠怒。
  神经大条的我并没有认识到这一点，我醒悟过来时，便是小A不搭理我时了。我一向好面子，自认为拉不下脸来去跟小A道歉，明明就是一件小事，至于这么在乎吗？
  “啪”，一滴雨点滴落在我的头上，我猛地回过神来，却发现那只生物——蝶，故且算做蝶吧，已经快要挣脱了。“哗啦”树叶猛烈摇动，再看，已是蝶飞起来了！
  它没有放弃，真好；它挣脱了束缚，真好；它终于重生，真好！
  看着它留在树叶上的蛹壳，我心生感慨：我们都要奋力挣脱那些束缚的东西，就比如说，我们自认为很重要的面子。
  很多东西，只有舍弃它，才能获得新生。
  那一刻我懂了；先要伸出言和之手，放下所谓的面子，才能在成长的道路上，长得更高、飞得更远！
 神经大条的我并没有认识到这一点，我醒悟过来时，便是小A不搭理我时了。我一向好面子，自认为拉不下脸来去跟小A道歉，明明就是一件小事，至于这么在乎吗？
  “啪”，一滴雨点滴落在我的头上，我猛地回过神来，却发现那只生物——蝶，故且算做蝶吧，已经快要挣脱了。“哗啦”树叶猛烈摇动，再看，已是蝶飞起来了！
  它没有放弃，真好；它挣脱了束缚，真好；它终于重生，真好！</pre
            >
          </div>
        </div>
        <!-- 信息公告 -->
        <div class="right-down">
          <div class="pub-box">
            <div class="pub-title">
              <img class="pub-title-icon" src="/images/icon-音量.svg" />
              信息公告
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/index.vue";
// import {asd} from "@/util/index.js";
export default {
  components: { Header },

  data() {
    const tableData = [
      {
        index: 1,
        unit: "实验室111",
        date: "预约时间",
        user: "人员",
        status: "审核中",
        desc: "备注123123",
      },
      {
        index: 2,
        unit: "实验室111222",
        date: "预约时间222",
        user: "人员222",
        status: "审核中22",
        desc: "备注123123222222222",
      },
    ];
    return {
      tableData: tableData,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed:{
    swiper() {
        return this.$refs.mySwiper.$swiper
      }
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      let demodata = { ...this.tableData[0] };
      demodata.index = i + 1;
      this.tableData.push(demodata);
    }
    this.$forceUpdate();
    this.swiper.slideTo(3, 1000, false)
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.screen-big {
  margin: 0 0.3rem;
  height: inherit;
  font-size: 0.14rem;
}
.top-loopPlay {
  padding-top: 0.14rem;
  height: 17%;
  // background: red;
}
.center-main {
  display: flex;
  height: 76%;
  padding: 0.3rem 0;
  .left-content {
    width: 21.5%;
    flex-shrink: 0;
    .left-user {
      height: 24%;
      padding: 0.16rem 0.2rem;
      background: rgba(98, 228, 182, 0.7);
      border-radius: 0.1rem;
      .icon-user {
        background: #fff;
        border-radius: 100%;
      }
      .userInfo-main {
        display: flex;
        margin-top: 0.14rem;
        .user-head {
          width: 1rem;
          height: 1rem;
          background: #ffffff;
          border: 1px solid #707070;
          border-radius: 50%;
          margin-right: 0.12rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .userInfo-desc {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          text-align: left;
          color: #000000;
          .desc-item {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
          }
        }
      }
    }
    .left-desc {
      height: 76%;
      padding-top: 0.2rem;
      .pub-title {
        flex-shrink: 0;
      }
      .pub-box {
        display: flex;
        flex-direction: column;
        padding: 0.16rem 0.2rem;
        background: rgba(57, 110, 171, 0.7);
        border-radius: 0.1rem;
      }
      .left-desc-content {
        flex: 1;
        margin-top: 0.14rem;
        margin-bottom: 0.12rem;
        position: relative;
        pre {
          line-height: 0.22rem;
          white-space: pre-wrap;
          word-wrap: break-word;
          margin: 0;
          padding: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          text-align: left;
          color: #252566;
        }
      }
    }
  }
  .center-content {
    flex: 1;
    padding: 0 0.2rem;

    .center-up {
      height: 63%;
      display: flex;
      border-radius: 0.1rem;
      background: #396eab;
      flex-direction: column;
      padding: 0.14rem 0.2rem 0.3rem 0.2rem;
      .table-box {
        flex: 1;
        width: 100%;
        position: relative;
        margin-top: 0.2rem;
        table {
          position: absolute;
          border-collapse: collapse;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          thead {
            td {
              border: 1px solid rgba(255, 255, 255, 0.5);
              background-color: rgba(11, 51, 118, 1);
              height: 0.4rem;
              box-sizing: border-box;
            }
          }

          tbody {
            position: absolute;
            top: 0.4rem;
            left: 0;
            width: 100%;
            height: calc(100% - 0.4rem);
            overflow-y: auto;
          }
          td {
            height: 0.36rem;
            line-height: 0.36;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            box-sizing: border-box;
            padding: 0 0.1rem;
            text-align: center;
          }
          tr {
            td:nth-child(1) {
              width: 6%;
            }
            td:nth-child(2) {
              width: 10%;
            }
            td:nth-child(3) {
              width: 16%;
            }
            td:nth-child(4) {
              width: 36%;
            }
            td:nth-child(5) {
              width: 11%;
            }
            td:nth-child(6) {
              width: 21%;
            }
          }
        }
      }
    }
    .center-down {
      height: 37%;
      padding-top: 0.2rem;
      display: flex;
      .center-down-left {
        width: 67%;
        height: 100%;
        padding: 0.14rem 0.2rem;
        border-radius: 0.1rem;
        background-color: rgba(98, 228, 182, 0.7);
      }
      .center-down-right {
        padding-left: 0.2rem;
        width: 33%;
        .pub-box {
          border-radius: 0.1rem;
          padding: 0.14rem 0.2rem;
          background-color: rgba(235, 106, 79, 0.7);
        }
      }
    }
  }
  .right-content {
    width: 21.5%;
    flex-shrink: 0;

    .right-up {
      height: 45%;
      border-radius: 0.1rem;
      padding: 0.14rem 0.2rem;
      background-color: rgba(235, 106, 79, 0.7);
      display: flex;
      flex-direction: column;
      .security-desc-content {
        flex: 1;
        margin-top: 0.14rem;
        margin-bottom: 0.12rem;
        position: relative;
        pre {
          line-height: 0.22rem;
          white-space: pre-wrap;
          word-wrap: break-word;
          margin: 0;
          padding: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          text-align: left;
          color: #252566;
        }
      }
    }
    .right-down {
      padding-top: 0.2rem;
      height: 55%;
      .pub-box {
        border-radius: 0.1rem;
        padding: 0.14rem 0.2rem;
        background-color: rgba(57, 110, 171, 0.7);
      }
    }
  }
}
</style>