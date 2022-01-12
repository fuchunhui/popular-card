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
@width: 400px;
@height: 150px;

#app {
  width: 100%;
  height: 100%;
  color: #2C3E50F3;
  background: #EBEDF3;
  .container {
    margin: 0 auto;
    width: calc(100% - @width);
    height: 100%;
    padding: 10px;
  }
  .color-wrap {
    height: @height;
  }
  .card {
    height: calc(100% - @height);
  }
}
</style>
