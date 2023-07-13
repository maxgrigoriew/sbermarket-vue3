<template>
  <div class="hamburger">
    <isButton @click="click">
      <span class="hamburger__icon">
        <font-awesome-icon icon="bars" v-if="true" />
        <font-awesome-icon icon="xmark" v-else />
      </span>
      <span class="hamburger__title"> Меню </span>
    </isButton>
    <IsMenu :class="{ active: isOpenMenu }" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import isButton from './../UI/isButton.vue'
import IsMenu from './isMenu.vue'

const isOpenMenu = ref(true)

const click = () => {
  isOpenMenu.value = !isOpenMenu.value
}
</script>

<style lang="scss" scoped>
.hamburger {
  position: relative;
  &__icon {
    margin-right: 5px;
    display: inline-block;
  }
  &__title {
    display: inline-block;
  }
}
</style>
