<template>
  <div class="roomDesc">
    <!-- 预约信息 -->
    <div class="main-down-title">
      <img class="pub-title-icon" src="/images/icon-闹钟.svg" />
      预约信息
    </div>
    <!-- reserveTable -->
    <div class="table-box">
      <div>
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
            v-for="(item, index) in reserveTable"
            :key="index"
            :style="`background:${
              index & 1 ? 'rgba(228,242,255,0.5)' : 'rgba(255,255,255,0.5)'
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
  </div>
</template>
<script>
export default {
  props: {
    reserveTable: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  watch: {
    reserveTable: {
      handler(newV, old) {},
      deep: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.roomDesc {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .table-box {
    flex: 1;
    width: 100%;
    position: relative;
    border-radius: 0.1rem;
    border: 0.2rem solid rgba(248, 248, 250, 0);
    // padding: 0.2rem;
    background: rgba(248, 248, 250, 0.5);
    overflow-y: auto;
    table { 
      border-collapse: collapse;
      table-layout: fixed;
      width: 100%;
      top: 0;
      left: 0;
      // right: 0.2rem;
      // bottom: 0.2rem;
      width: 100%; 
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
</style>