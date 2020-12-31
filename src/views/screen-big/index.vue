<template>
  <!-- 大屏-41寸 -->
  <div class="screen-big">
    <Header />
    <treeEl @treeClick="treeClick" />
    <!--  顶部实验室轮播 -->
    <div class="top-loopPlay">
      <div class="pub-box">
        <div class="loop-button-prev">
          <img src="/images/loop-left.svg" alt="" @click="swiper.slidePrev()" />
        </div>
        <div class="loop-button-next">
          <img src="/images/loop-left.svg" alt="" @click="swiper.slideNext()" />
        </div>
        <swiper ref="mySwiper" :options="swiperOptions" key="mySwiper1231">
          <swiper-slide
            :class="{
              'top-loop-active':
                currentLaboratory.laboratoryInfoId === item.laboratoryInfoId,
            }"
            v-for="(item, index) in topLoopPlay"
            :key="index"
            @click.native="currentLaboratory = { ...item }"
          >
            <div class="top-loop-item">
              <div class="topLoop-item-left"></div>

              <div class="topLoop-item-right">
                <div class="right-item">
                  实验室名称：{{ item.laboratoryName }}
                </div>
                <div class="right-item">
                  实验室类型：{{ item.laboratoryTypeValue }}
                </div>
                <div class="right-item">
                  实验室状态：
                  <div
                    :class="`item-status item-status${item.laboratoryStatus}`"
                  >
                    {{ item.laboratoryStatus == 1 ? "使用中" : "未使用" }}
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- 实验室 -->
    <div class="center-main">
      <!-- 左侧布局 -->
      <div class="left-content">
        <!-- 负责人 -->
        <div class="left-user">
          <div class="pub-title">
            <img class="pub-title-icon" src="/images/icon-用户.svg" />
            实验室负责人
          </div>
          <div class="userInfo-main">
            <div class="user-head">
              <img
                :src="currentLaboratory.userAvatar || '/images/icon-用户.svg'"
                alt=""
              />
            </div>
            <div class="userInfo-desc">
              <div class="desc-item">
                负责人姓名：{{ currentLaboratory.laboratoryAdminName || "-" }}
              </div>
              <div class="desc-item">
                联系方式：{{ currentLaboratory.laboratoryAdminPhone || "-" }}
              </div>
              <div class="desc-item">
                负责实验室：{{
                  currentLaboratory.responsibleForLaboratory || "-"
                }}
              </div>
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
              <pre>{{ currentLaboratory.laboratoryIntroduction || "-" }}</pre>
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
                  <td>
                    <div class="cell">
                      {{ index + 1 }}
                    </div>
                  </td>
                  <td>
                    <div class="cell">
                      {{ item.laboratoryName }}
                    </div>
                  </td>
                  <td>
                    <div class="cell">
                      {{ item.reserveTime }}
                    </div>
                  </td>
                  <td>
                    <div class="cell">
                      {{ item.personnel || "" }}
                    </div>
                  </td>
                  <td>
                    <div class="cell">
                      <span v-if="item.reserveStatus == 0">审核中</span>
                      <span v-else-if="item.reserveStatus == 1">预约成功</span>
                      <span v-else-if="item.reserveStatus == 2">预约失败</span>
                      <span v-else>-</span>
                    </div>
                  </td>
                  <td>
                    <div class="cell">
                      {{ item.remarks || "-" }}
                    </div>
                  </td>
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
              <div class="bottomLoopPlay-box" style="flex: 1">
                <div class="loop-button-prev">
                  <img
                    src="/images/loop-left.svg"
                    alt=""
                    @click="mySwiperBottom.slidePrev()"
                  />
                </div>
                <div class="loop-button-next">
                  <img
                    src="/images/loop-left.svg"
                    alt=""
                    @click="mySwiperBottom.slideNext()"
                  />
                </div>
                <swiper ref="mySwiperBottom" :options="swiperOptions">
                  <!-- laboratory-card -->
                  <swiper-slide
                    v-for="(item, index) in bottomLoopPlay"
                    :key="index"
                  >
                    <div class="bottom-loop-item">
                      <div class="bottomLoop-item-left">
                        <img
                          :src="item.userAvatar || '/images/icon-用户.svg'"
                          alt=""
                        />
                      </div>

                      <div class="bottomLoop-item-right">
                        <div class="right-item">
                          姓名：{{ item.userName || "-" }}
                        </div>
                        <div class="right-item">
                          开始时间：{{ item.startTime || "" }}
                        </div>
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
            <pre>{{ currentLaboratory.safetyInstruction }}</pre>
          </div>
        </div>
        <!-- 信息公告 -->
        <div class="right-down">
          <div class="pub-box">
            <div class="pub-title">
              <img class="pub-title-icon" src="/images/icon-音量.svg" />
              信息公告
            </div>

            <div class="message-box">
              <div class="message-title">{{ noticeData.messageSummary }}</div>
              <pre>{{ noticeData.messageContent }}</pre>
            </div>
            <div class="message-bottom">
              <el-pagination
                background
                layout="prev, pager, next"
                :current-count="noticePage.pageCurrent"
                :page-size="noticePage.pageRows"
                :total="noticePage.total"
                @current-change="reqPostLaboratoryNotice"
              >
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/index.vue";
import { Message } from "element-ui";
// import {asd} from "@/util/index.js";
import {
  postLaboratoryInfo,
  postLaboratoryUser,
  postLaboratoryReserve,
  postLaboratoryNotice,
} from "@/api";
import treeEl from "@/components/treeEl";
export default {
  components: { Header, treeEl },

  data() {
    const tableData = [
      // {
      //   index: 1,
      //   laboratoryName: "实验室111",
      //   reserveTime: "预约时间",
      //   personnel: "人员",
      //   reserveStatus: "审核中",//预约状态,0:审核中 1:预约成功 2:预约失败
      //   remarks: "备注123123",
      // },
    ];
    return {
      laboratoryList: [],
      noticePage: {
        total: 0,
        pageCurrent: 1,
        pageRows: 1,
      },
      currentLaboratory: {},
      tableData: [] || tableData,
      swiperOptions: {
        loop: false,
        speed: 1500,
        slidesPerView: "auto",
        spaceBetween: 15,
        watchSlidesProgress: true,
      },
      noticeData: {},
      topLoopPlay: [],
      bottomLoopPlay: [],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    mySwiperBottom() {
      return this.$refs.mySwiperBottom.$swiper;
    },
  },
  watch: {
    currentLaboratory: {
      handler(newV, old) {
        console.log(newV);
        if (newV.laboratoryInfoId) {
          this.reqPostLaboratoryUser();
          this.reqPostLaboratoryReserve();
          this.reqPostLaboratoryNotice();
        }
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {},
  methods: {
    //公告分页
    reqPostLaboratoryNotice(page) {
      const formdata = {
        laboratoryInfoId: this.currentLaboratory.laboratoryInfoId,
        pageCurrent: page || 1,
        pageRows: 1,
      };
      postLaboratoryNotice(formdata)
        .then((res) => {
          const { rows, total, pageCurrent, pageRows } = res.data;
          this.noticeData = rows[0];
          this.noticePage = { total, pageCurrent, pageRows };
        })
        .catch((err) => {
          this.noticeData = {};
          this.noticePage = { total: 0, pageCurrent: 1, pageRows: 1 };
        });
    },
    //预约信息查询
    reqPostLaboratoryReserve() {
      postLaboratoryReserve({
        pageCurrent: 1,
        pageRows: 1000,
        laboratoryInfoId: this.currentLaboratory.laboratoryInfoId,
      })
        .then((res) => {
          const { data } = res;
          this.tableData = data.rows || [];
        })
        .catch((err) => {
          this.tableData = [];
        });
    },
    //实验室人员
    reqPostLaboratoryUser() {
      postLaboratoryUser({
        laboratoryInfoId: this.currentLaboratory.laboratoryInfoId,
      })
        .then((res) => {
          this.bottomLoopPlay = res.data || [];
          this.mySwiperBottom.slideTo(0, 500);
        })
        .catch((err) => {
          this.bottomLoopPlay = [];
        });
    },

    treeClick(list) {
      console.log(list);
      this.laboratoryList = list;
      const ids = list.map((val) => val.placeInfoId);
      // this.currentId = list[0];
      this.reqpostLaboratoryInfo(ids);
    },
    //实验室信息-分页
    reqpostLaboratoryInfo(ids) {
      postLaboratoryInfo({
        pageCurrent: 1,
        pageRows: 1000,
        placeInfoIdArray: ids,
      }).then((res) => {
        const { data } = res;
        this.topLoopPlay = data.rows || [];
        this.currentLaboratory = { ...this.topLoopPlay[0] };
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.screen-big {
  margin: 0 0.3rem;
  height: inherit;
  font-size: 0.14rem;
}
//顶部实验室轮播
.top-loopPlay {
  padding-top: 0.14rem;

  height: 17%;

  .pub-box {
    position: relative;
    padding: 0 0.7rem;
  }
  // background: red;
  .loop-button-prev {
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    left: 0;
    top: 0;
    width: 0.7rem;
    justify-content: flex-end;
    img {
      cursor: pointer;
      width: 0.6rem;
      height: 0.6rem;
      margin-right: 0.1rem;
    }
    &::after {
      position: absolute;
      content: "";
      top: 0;
      right: 0;
      width: 0.3rem;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.59)
      );
    }
  }
  .loop-button-next {
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    right: 0;
    top: 0;
    width: 0.7rem;

    img {
      cursor: pointer;
      width: 0.6rem;
      height: 0.6rem;
      transform: rotateY(180deg);
      margin-left: 0.1rem;
    }
    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 0.3rem;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.59),
        rgba(255, 255, 255, 0)
      );
    }
  }
  /deep/.swiper-container {
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    // padding: 90px 0;
    margin-left: auto;
    margin-right: auto;
  }
  /deep/.swiper-slide {
    box-sizing: border-box;
    padding: 0.2rem;
    border-radius: 0.1rem;
    background: linear-gradient(45deg, #4654d7 1%, #03ffab 98%);
    border: 2px solid #ffffff;
    border-radius: 0.1rem;
    text-align: center;
    border: 2px solid #ffffff;
    opacity: 0.7;
    width: 3.74rem;
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
    .top-loop-item {
      height: 1.31rem;
      background: #f8f8fa;
      border-radius: 0.1rem;
      padding: 0.2rem;
      width: 100%;
      display: flex;
      box-sizing: border-box;
      .topLoop-item-left {
        border-radius: 0.95rem;
        height: 0.95rem;
        flex-shrink: 0;
        width: 0.95rem;
        background: url("/images/laboratory.png") no-repeat 100% 100%;
        margin-right: 0.2rem;
      }
      .topLoop-item-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: left;
        color: #000000;
        max-height: 0.95rem;
        overflow-y: auto;
        .right-item {
          width: 100%;
          min-height: 0.25rem; 
          max-height: 0.45rem;
          overflow: hidden;
          display: flex;
          flex-wrap: wrap;
          font-size: 0.16rem;
          font-family: PingFang SC, PingFang SC-Bold;
          font-weight: 700;
          text-align: left;
          color: #000000;
          
        }

        .item-status {
          position: relative;
          padding-left: 0.26rem;

          &::before {
            position: absolute;
            content: "";
            top: 0.03rem;
            left: 0;
            width: 0.16rem;
            height: 0.16rem;

            border-radius: 50%;
          }
        }
        .item-status0 {
          color: #e91127;
          &::before {
            background: #e91127;
          }
        }
        .item-status1 {
          color: #00ff21;
          &::before {
            background: #00ff21;
          }
        }
      }
    }
  }
  .top-loop-active {
    // border: 2px solid #ffffff;
    opacity: 1;
  }
}
.center-main {
  display: flex;
  height: 76%;
  padding: 0.3rem 0;
  .left-content {
    width: 21.5%;
    flex-shrink: 0;
    .left-user {
      overflow-y: auto;
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
          flex-shrink: 0;
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
          max-height: 1.1rem;
          overflow-y: auto;
          flex-direction: column;
          justify-content: space-around;
          text-align: left;
          color: #000000;
          overflow-y: auto;
          .desc-item {
            min-height: 0.3rem;
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
        overflow-y: auto;
        table {
          // position: absolute;
          border-collapse: collapse;
          table-layout: fixed;
          width: 100%;
          top: 0;
          left: 0;
          width: 100%;
          // height: 100%;
          thead {
            td {
              border: 1px solid rgba(255, 255, 255, 0.5);
              background-color: rgba(11, 51, 118, 1);
              height: 0.4rem;
              box-sizing: border-box;
            }
          }

          tbody {
          }
          td {
            height: 0.36rem;
            box-sizing: border-box;
            text-overflow: ellipsis;
            vertical-align: middle;
            .cell {
              box-sizing: border-box;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: normal;
              word-break: break-all;
            }

            box-sizing: border-box;
            padding: 0 0.1rem;
            text-align: center;
          }
          tr {
            td:nth-child(1) {
              width: 6%;
            }
            td:nth-child(2) {
              width: 20%;
            }
            td:nth-child(3) {
              width: 25%;
            }
            td:nth-child(4) {
              width: 25%;
            }
            td:nth-child(5) {
              width: 9%;
            }
            td:nth-child(6) {
              width: 15%;
            }
          }
        }
      }
    }
    .center-down {
      height: 37%;
      padding-top: 0.2rem;
      display: flex;
      //实验室人员信息-底部轮播
      .center-down-left {
        flex-shrink: 0;
        float: left;
        width: 67%;
        height: 100%;
        padding: 0.14rem 0.2rem 0.4rem 0.2rem;
        border-radius: 0.1rem;
        background-color: rgba(98, 228, 182, 0.7);
        position: relative;
        .pub-box {
          // position: relative;
          // padding: 0 0.45rem;
          display: flex;
          flex-direction: column;
        }
        .bottomLoopPlay-box {
          margin-top: 0.38rem;
          position: relative;
          flex: 1;
          padding: 0 0.35rem;
          width: 6.28rem;
          box-sizing: border-box;
        }
        // background: red;
        .loop-button-prev {
          position: absolute;
          display: flex;
          align-items: center;
          height: 100%;
          left: -0.1rem;
          top: 0;
          width: 0.45rem;
          justify-content: flex-end;
          img {
            cursor: pointer;
            width: 0.3rem;
            height: 0.3rem;
            margin-right: 0.1rem;
          }
          &::after {
            position: absolute;
            content: "";
            top: 0;
            right: 0;
            width: 0.3rem;
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
          height: 100%;
          right: -0.1rem;
          top: 0;
          width: 0.45rem;

          img {
            cursor: pointer;
            width: 0.3rem;
            height: 0.3rem;
            transform: rotateY(180deg);
            margin-left: 0.1rem;
          }
          &::before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 0.3rem;
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
          // width: 100%;
          box-sizing: border-box;
          height: 100%;
          // padding: 90px 0;
          margin-left: auto;
          margin-right: auto;
        }
        /deep/.swiper-slide {
          box-sizing: border-box;
          padding: 0.2rem 0.1rem;
          border-radius: 0.1rem;
          background: rgba(248, 248, 250, 1);
          border: 2px solid #ffffff;
          border-radius: 0.1rem;
          text-align: center;
          border: 2px solid #ffffff;
          opacity: 0.7;
          width: 3.24rem;
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

            border-radius: 0.1rem;
            width: 100%;
            display: flex;
            box-sizing: border-box;
            .bottomLoop-item-left {
              img {
                width: 0.7rem;
                height: 0.7rem;
                border-radius: 0.7rem;
              }
              height: 100%;
              flex-shrink: 0;
              width: 22%;
              min-width: 0.7rem;
              min-height: 0.7rem;
              // background: url("/images/icon-用户.svg") no-repeat 100% 100%;
              margin-right: 0.1rem;
            }
            .bottomLoop-item-right {
              max-height: 1.26rem;
              overflow-y: auto;
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
                min-height: 0.3rem;
                // flex-wrap: wrap;
                // white-space: nowrap;
                // text-overflow: ellipsis;
                // overflow: hidden;
                // word-break: break-all;
                font-size: 0.12rem;
                font-family: PingFang SC, PingFang SC-Medium;
                font-weight: 500;
                text-align: left;
                color: #000000;
              }
            }
          }
        }
      }
      .center-down-right {
        padding-left: 0.2rem;
        flex-shrink: 0;
        float: left;
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
      .message-box {
        margin-top: 0.2rem;
        width: 100%;
        height: 2.41rem;
        // opacity: 0.5;
        background: rgba(248, 248, 250, 0.5);
        border-radius: 0.1rem;
        padding: 0.16rem;
        .message-title {
          height: 0.22rem;
          font-size: 0.16rem;
          font-family: PingFang SC, PingFang SC-Bold;
          font-weight: 700;
          text-align: left;
          color: #252566;
        }
        pre {
          margin-top: 0.1rem;
          padding-bottom: 0.27rem;
          overflow-y: auto;
          height: 1.66rem;
          font-size: 0.14rem;
          font-family: PingFang SC, PingFang SC-Medium;
          text-align: left;
          color: #252566;
        }
      }
      .message-bottom {
        margin-top: 0.2rem;
        text-align: center;
      }
    }
  }
}
</style>