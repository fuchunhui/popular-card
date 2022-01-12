<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {PopularButton} from '../components/common';
import {getRandomImage} from '../db/data';
import {FillText, Story} from '../types';
import {fillText} from '../utils/canvas';
import {download} from '../utils/download';
import {BLOG_URL} from '../config/index';

const cardCanvas = ref<HTMLCanvasElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);
let canvas = document.createElement('canvas');
let width = 100;
let height = 100;

const img = new Image();

const makeCanvas = (story: Story) => {
  img.onload = async () => {
    canvas = canvasRef.value as HTMLCanvasElement;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    console.log(width, height);
    // TODO 根据 width height naturalWidth naturalHeight 随机给出 canvas 的位置。
    renderImage(story);
  };

  img.onerror = err => {
    console.error(err);
  };

  img.src = story.image;
};

const renderImage = (story: Story) => {
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  
  ctx.drawImage(img, 0, 0);

  const {special, text} = story;
  if (!special) {
    fillText(ctx, canvas.width, text, story as FillText);
  }
};

const refresh = () => {
  setStory();
};
const save = () => {
  const suffix = new Date().getTime().toString().slice(-6);
  download(canvas, 'png', `福虎生威_${suffix}`);
};
const encourage = () => {
  window.open(BLOG_URL);
};

const setData = () => {
  const {width: _width, height: _height} = cardCanvas.value.getBoundingClientRect();
  width = _width;
  height = _height;
};

const setStory = () => {
  const story = getRandomImage();
  makeCanvas(story);
};

onMounted(() => {
  setData();
  setStory();
});
</script>

<template>
  <div class="card">
    <div class="card-btn">
      <div class="card-btn-left"/>
      <popular-button u="primary" label="再来一次？" @click="refresh"/>
      <popular-button u="primary" label="保存，秀一下" @click="save"/>
      <popular-button u="primary" label="感觉不错，去点个赞！" @click="encourage"/>
      <popular-button u="primary" label="垃圾，去吐槽" @click="encourage"/>
    </div>
    <div class="card-canvas" ref="cardCanvas">
      <canvas ref="canvasRef"/>
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
      font-size: 14px;
    }
  }
  &-canvas {
    width: 100%;
    height: calc(100% - @height);
    min-height: 400px;
    background-color: cyan;
  }
}
</style>
