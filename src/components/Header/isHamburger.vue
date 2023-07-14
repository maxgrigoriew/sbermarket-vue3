<template>
  <div class="hamburger">
    <isButton class="btn" style="height: 50px" @click="changeMenu">
      <span class="hamburger__icon">
        <font-awesome-icon
          icon="bars"
          v-if="isOpenMenu === false"
          font-size="18"
        />
        <font-awesome-icon icon="xmark" v-else font-size="18" />
      </span>
      <span class="hamburger__title"> Каталог </span>
    </isButton>
    <IsMenu :class="{ active: isOpenMenu }" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import isButton from './../UI/isButton.vue'
import IsMenu from './isMenu.vue'

const isOpenMenu = ref(false)

const changeMenu = () => {
  if (isOpenMenu.value) {
    isOpenMenu.value = false
  } else {
    isOpenMenu.value = true
  }
  console.log(isOpenMenu.value)
}
</script>

<style lang="scss" scoped>
.hamburger {
  position: relative;
  &__icon {
    margin-right: 5px;
    width: 20px;
    display: inline-block;
  }
  &__title {
    display: inline-block;
  }
}
</style>
