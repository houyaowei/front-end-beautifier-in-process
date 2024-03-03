<template>
    <div class="btn-container">
      <button class="btn-target" @click="clickBack">{{ text }}</button>
    </div>
  </template>

  <script setup>
  const emit = defineEmits(['cb'])

  const props = defineProps({
    text: { type: String, default: '提交' },
  })

  const clickBack = () => {
    console.log('btn clicked')
    emit('cb')
  }
  </script>

  <style lang="less" scoped>
  .btn-container {
    .btn-target {
      padding: 8px 15px;

      background-color: #36c96d;
      border-width: 0px;
      border-radius: 2px;
      box-shadow: none;

      font-size: 14px;
      color: #fff;

      cursor: pointer;
    }
  }
  </style>
