<template>
  <!-- 小屏-21寸 -->
  <div class="screen-small">
    <Header />
    <treeEl @treeClick="treeClick" :checkbox="false" />
    <div class="screen-small-main">
      <div class="left-nav">
        <div
          class="nav-item"
          v-for="(item, index) in navData"
          :key="index"
          @click="navClick(item, index)"
          :class="{ 'nac-active': item.type === activeNavType }"
        >
          <img :src="item.icon" class="nav-icon" alt="" />
          {{ item.name }}
        </div>
      </div>
      <div class="right-main">
        <div class="roomDesc-up">
          <div class="up-item">
            <div class="up-item-wrapper">
              <div class="up-item-left">
                <img src="/images/laboratory.png" alt="" />
              </div>
              <div class="up-item-right">
                <div class="right-item">
                  实验室名称：{{ currentLaboratory.laboratoryName || "-" }}
                </div>
                <div class="right-item">
                  实验室类型：{{ currentLaboratory.laboratoryTypeValue || "-" }}
                </div>
                <div class="right-item">
                  实验室状态：

                  <div :class="`item-status item-status${currentLaboratory.laboratoryStatus}`" >
                    {{
                      currentLaboratory.laboratoryStatus == 1
                        ? "使用中"
                        : "未使用"
                    }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="up-item">
            <div class="up-item-wrapper">
              <div class="up-item-left">
                <img
                  :src="currentLaboratory.userAvatar || '/images/icon-用户.svg'"
                  alt=""
                />
              </div>
              <div class="up-item-right">
                <div class="right-item">
                  负责人姓名：{{ currentLaboratory.laboratoryAdminName || "-" }}
                </div>
                <div class="right-item">
                  联系方式：{{ currentLaboratory.laboratoryAdminPhone || "-" }}
                </div>
                <div class="right-item">
                  负责实验室：{{
                    currentLaboratory.responsibleForLaboratory || "-"
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-down">
          <roomDesc
            :data="currentLaboratory"
            v-show="activeNavType === 'roomDesc'"
          />
          <userInfo
            :userList="userList"
            v-if="activeNavType === 'userInfo'"
          />
          <roomSecurity
            :data="currentLaboratory"
            v-show="activeNavType === 'roomSecurity'"
          />

          <reserveInfo  :reserveTable="reserveTable" v-show="activeNavType==='reserveInfo'"/>
          <operationFlow  :data="currentLaboratory" v-show="activeNavType==='operationFlow'"/>
        </div>
      </div>
    </div> 
  </div>
</template>
<script>
import Header from "@/components/header/index.vue";
import roomDesc from "./components/roomDesc";
import roomSecurity from "./components/roomSecurity";
import userInfo from "./components/userInfo";
import reserveInfo from "./components/reserveInfo";
import operationFlow from './components/operationFlow'
import {
  postLaboratoryInfo,
  postLaboratoryUser,
  postLaboratoryReserve,
  postLaboratoryNotice,
} from "@/api";
import treeEl from "@/components/treeEl";
export default {
  components: { Header, roomDesc, roomSecurity, treeEl, userInfo, reserveInfo,operationFlow },
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
          type: "userInfo",
        },
        {
          name: "预约信息",
          icon: "/images/icon-闹钟.svg",
          type: "reserveInfo",
        },
        {
          name: "实验室安全须知",
          icon: "/images/icon-安全.svg",
          type: "roomSecurity",
        },
        {
          name: "操作规程",
          icon: "/images/icon-流程.svg",
          type: "operationFlow",
        },
      ],
      currentLaboratory: {},
      userList: [],
      reserveTable: [],
    };
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
    navClick(data, index) {
      this.activeNavType = data.type;
    },
    treeClick(list) {
      const ids = list.map((val) => val.placeInfoId);
      this.reqpostLaboratoryInfo(ids);
    },
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
          this.reserveTable = data.rows || [];
        })
        .catch((err) => {
          this.reserveTable = [];
        });
    },
    //实验室人员
    reqPostLaboratoryUser() {
      postLaboratoryUser({
        laboratoryInfoId: this.currentLaboratory.laboratoryInfoId,
      })
        .then((res) => {
          this.userList = res.data || [];
        })
        .catch((err) => {
          this.userList = [];
        });
    },
    //实验室信息-分页
    reqpostLaboratoryInfo(ids) {
      postLaboratoryInfo({
        pageCurrent: 1,
        pageRows: 1000,
        placeInfoIdArray: ids,
      }).then((res) => {
        const { data } = res;
        const rows = data.rows || [];
        this.currentLaboratory = { ...rows[0] };
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.screen-small {
  overflow: hidden;
  padding: 0 0.3rem;
  font-size: 0.14rem;
  
  // opacity: 0.7;
  .screen-small-main {
    margin: 0.13rem 0 0.52rem 0;
    height: 9.6rem;
    display:flex;
  }
  /deep/.main-down-title {
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
  .left-nav {
    // float: left;
    flex-shrink: 0;
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
        img {
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 1.6rem;
        }
        margin-right: 0.2rem;
      }
      .up-item-right {
        overflow-y: auto;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: left;
        color: #000000;
        .right-item {
          width: 100%;
          min-height: 0.3rem;
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
            // background: #00ff21;
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
}
</style>