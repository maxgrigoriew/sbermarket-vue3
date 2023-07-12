<template>
  <div class="hamburger">
    <isButton @click="click"> [] Меню</isButton>
    <div>{{ isOpenMenu }}</div>
    <IsMenu :class="{ active: isOpenMenu }" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import isButton from './../UI/isButton.vue'
import IsMenu from './isMenu.vue'
const isOpenMenu = ref(false)
const click = () => {
  isOpenMenu.value = !isOpenMenu.value
}
</script>

<style>
.hamburger {
  position: relative;
}
</style>
