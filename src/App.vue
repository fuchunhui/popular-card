<script setup lang="ts">
import {ref, watch, computed, onMounted, provide} from 'vue';

const leftWidth = 180;
const sideWidth = `${leftWidth}px`;
const paddingNum = 10;
const padding = `${paddingNum}px`;

const setRank = () => {
  const ele = document.getElementById('app') as HTMLElement;
  const {width, height} = ele.getBoundingClientRect();

  provide('rank', {
    width: width - leftWidth - 2 * paddingNum,
    height: height - 2* paddingNum
  });
};

onMounted(() => {
  setRank();
});
</script>

<template>
  <div>
    123
  </div>
</template>

<style lang="less">
@import url('src/assets/css/mixins.less');
@width: v-bind(sideWidth);
@padding: v-bind(padding);

#app {
  width: 100%;
  height: 100%;
  display: flex;
  color: #2C3E50F3;
  background: #EBEDF3;
  .container {
    flex: 1;
    width: calc(100% - @width);
    height: 100%;
    padding: @padding;
  }
}
</style>
