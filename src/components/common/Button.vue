<template>
  <button
    :class="[
      'popular-button',
      {
        'disabled': disabled
      }]"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: '提交'
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

</script>

<style lang="less">
.popular-button {
  min-width: 64px;
  height: 32px;
  padding: 1px 2px;
  background-color: #FFFFFF;
  border: 1px solid #D9D9D9;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;

  &.disabled {
    &,
    &:hover {
      border-color: #DDDEE4;
      color: rgba(102, 102, 102, 0.4);
      opacity: 1;
      cursor: default;
    }
  }

  &[u~="primary"] {
    background-color: #4B98F8;
    border-color: transparent;
    color: #FFFFFF;
    &.disabled,
    &.disabled:hover {
      background-color: #F6F6F6;
      border-color: #4B98F8;
      color: #4B98F8;
    }
  }

  &[u~="grey"] {
    background-color: #F6F6F6;
    color: #666666;

    &:hover {
      background-color: #F0F0F0;
    }
    &:active {
      background-color: #ECECEC;
    }

    &.disabled,
    &.disabled:hover {
      background-color: #F6F6F6;
      opacity: .4;
    }
  }

  &[u~="icon"] {
    min-width: 24px;
    width: 24px;
    height: 24px;
    background-color: transparent;
    border-color: transparent;
  }
}
</style>
