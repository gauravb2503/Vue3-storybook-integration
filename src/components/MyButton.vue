<template>
    <button :class="{ 'primary': props.primary }" @click="props.callBack()">
        {{ props.buttonText }}
    </button>
</template>
  
<script setup lang="ts">
const props = defineProps<{
    primary: boolean,
    buttonText: string,
    callBack: Function
}>();

</script>
  
<style scoped>
button {
    padding: 10px 15px;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid #ccc;
    background-color: #fff;
}

.primary {
    background-color: #3498db;
    color: #fff;
    border: 1px solid #2980b9;
}
</style>
  