<script setup lang="ts">
import PopularWrap from './pages/PopularWrap.vue';
import Card from './pages/Card.vue';
</script>

<template>
  <div class="container">
    <popular-wrap/>
    <card/>
  </div>
</template>

<style lang="less">
@import url('src/assets/css/mixins.less');
@height: 140px;

#app {
  width: 100%;
  height: 100%;
  color: #d9c58e;
  background: #f51d2a;

  .container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 10px;
    overflow: auto;
  }
  .color-wrap {
    height: @height;
  }
  .card {
    height: calc(100% - @height);
  }
  @media screen and (min-width: 800px) {
    .container {
      width: 60%;
    }
  }
}
</style>
