<template>
  <div class="container">
    <div class="header">
      header
    </div>
    <div class="content">
      <div class="left">
        <ChartBlock></ChartBlock>
      </div>
      <div class="center">
        <ScreenMap></ScreenMap>
      </div>
      <div class="right">right</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import handleScreenAuto from '../../utils/autoScreen'
import ScreenMap from './components/ScreenMap.vue'
import ChartBlock from './components/ChartBlock.vue'

onMounted(() => {
  handleScreenAuto('.container');
  // 绑定自适应函数   ---防止浏览器栏变化后不再适配
  window.onresize = () => handleScreenAuto('.container');
  window.addEventListener('resize', () => {
    handleScreenAuto('.container')
  }, true);
});

onUnmounted(() => {
  window.removeEventListener('resize');
});
</script>

<style lang="scss">
.container {
  display: inline-block;
  width: 1920px; //设计稿的宽度
  height: 1080px; //设计稿的高度
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;

  .header {
    width: 100%;
    height: 80px;
    background-color: rgba(233, 195, 26, 0.4);
  }

  .content {
    height: 1000px;
    flex: 1 auto;
    display: flex;
    flex-direction: row;

    .left {
      width: 25%;
      background-color: rgba(26, 185, 233, 0.64);
    }

    .center {
      flex: 1 auto;
      background-color: rgba(142, 218, 107, 0.4);
      font-size: 30px;
    }

    .right {
      width: 25%;
      background-color: rgba(26, 185, 233, 0.4);
    }
  }
}
</style>
