<script setup lang="ts">
console.log('this is card.');
import {PopularButton} from '../components/common';

// const ele = document.getElementsByClassName('card') as HTMLElement;
// const {width, height} = ele.getBoundingClientRect();

const refresh = () => {
  console.log('refresh');
};
const save = () => {
  console.log('save');
};
const encourage = () => {
  console.log('encourage');
};
</script>

<template>
  <div class="card">
    <div class="card-btn">
      <div class="card-btn-left"/>
      <popular-button u="primary" label="再来一次" @click="refresh"/>
      <popular-button u="primary" label="保存" @click="save"/>
      <popular-button u="primary" label="感觉不错，去点个赞" @click="encourage"/>
    </div>
    <div class="card-canvas">
      <canvas/>
      123
    </div>
  </div>  
</template>

<style lang="less">
@height: 50px;

.card {
  width: 100%;
  height: 100%;
  &-btn {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: @height;
    &-left {
      flex: 1;
    }
    .popular-button {
      margin-left: 10px;
    }
  }
  &-canvas {
    width: 100%;
    height: calc(100% - @height);
    background-color: cyan;
  }
}
</style>
