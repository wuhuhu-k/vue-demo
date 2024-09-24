<template>
  <div class="container">
    <div class="header">
      header
    </div>
    <div class="content">
      <div class="left">
        left
        <!-- <ChartBlock></ChartBlock> -->
      </div>
      <div class="center">
        map
        <!-- <ScreenMap></ScreenMap> -->
      </div>
      <div class="right">right</div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
@import '../../assets/utils.scss';

.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  .header {
    width: vw(1920);
    height: vh(90);
    background-color: rgba(233, 195, 26, 0.4);
  }

  .content {
    flex: 1 auto;
    display: flex;
    flex-direction: row;

    .left {
      width: 25%;
      background-color: rgba(26, 185, 233, 0.64);
      font-size: vmax(30);
    }

    .center {
      flex: 1 auto;
      background-color: rgba(142, 218, 107, 0.4);
      font-size: vmin(30);
    }

    .right {
      width: 25%;
      background-color: rgba(26, 185, 233, 0.4);
    }
  }
}
</style>
