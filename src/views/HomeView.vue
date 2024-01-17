<script setup lang="ts">
import MyButton from '@/components/MyButton.vue';
</script>

<template>
  <div>
    Hello From VUE 3
    <MyButton :primary="true" :button-text="'Click Me'" :call-back="() => {console.log('This is test')}"></MyButton>
  </div>
</template>
