<template>
  <div class="roomDesc">
    <div class="main-down-title">
      <img class="pub-title-icon" src="/images/icon-book.svg" />
      实验室介绍
    </div>

    <!-- <div class="main-down-content"> -->
    <pre> {{data.laboratoryIntroduction||'无'}}</pre
    >
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  props:{
    data:{
      type:Object,
      default(){return{}}
    }
  },
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
  flex: 1;
  height: 100%;
  flex-direction: column;
  display: flex;
 
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
    // height: 100%;
    overflow: auto;
    text-align: left;
    color: #252566;
  }
}
</style>