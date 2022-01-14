<script setup lang="ts">
import {BLOG_URL} from '../config/index';
</script>

<template>
  <div class="color-wrap">
    <div class="logo">
      <a :href="BLOG_URL" target="_blank">刮刮乐表情包大作战</a>
    </div>
    <div class="color-wrap-content">
      <p>这是什么？是惊喜还是意外，是 bug 还是彩蛋？让我们一起刮刮刮，好玩就去点个赞。</p>
    </div>
  </div>
</template>

<style lang="less">
.color-wrap {
  width: 100%;
  height: 100%;

  &-content {
    padding-top: 10px;
    font-size: 16px;
    margin: 0 auto;
    p {
      line-height: 32px;
    }
  }

  .logo {
    position: relative;
    height: 48px;
    line-height: 48px;
    padding: 0 15px;
    text-align: center;
    a {
      width: 220px;
      padding-left: 24px;
      font-size: 30px;
    }
  }
}
</style>