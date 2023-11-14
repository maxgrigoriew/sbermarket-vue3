<script setup lang="ts">
import { ref, onMounted } from 'vue'
import isButton from './../UI/isButton.vue'

const isOpen = ref(true)

const closeModal = () => {
  isOpen.value = false
}

onMounted(() => {
  setTimeout(() => {
    isOpen.value = false
  }, 5000)
})
</script>
<template>
  <transition name="fade">
    <div class="cookie" v-if="isOpen" v-click-outside="closeModal">
      <isButton class="cookie__close" @click="isOpen = !isOpen">
        <font-awesome-icon icon="xmark" font-size="18" />
      </isButton>
      <div class="cookie__inner">
        <div class="cookie__text">
          Мы используем <a class="cookie__link" href="#">cookies</a> , чтобы
          сайт работал лучше. А ещё применяем
          <a class="cookie__link" href="#">рекомендательные технологии</a>
        </div>
        <isButton class="cookie__btn btn">Хорошо</isButton>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.cookie {
  @import './../../assets/scss/vars';
  position: fixed;
  max-width: 340px;
  right: 50px;
  bottom: 10px;
  background-color: $light;
  border-radius: $middle;
  color: $light;
  padding: 16px;
  z-index: 30;

  &__close {
    position: absolute;
    right: 20px;
    top: 20px;
    color: $gray;
    transition: $transition;
    &:hover {
      color: $gray-light;
    }
  }
  &__inner {
    position: relative;
    padding-left: 40px;
    padding-right: 40px;
    color: $black;
    font-size: 14px;
    &::before {
      content: '';
      position: absolute;
      top: 3px;
      left: 0;
      z-index: 1;
      width: 32px;
      height: 32px;
      background-image: url('../../assets/images/cookies.webp');
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  &__text {
    margin-bottom: 12px;
  }

  &__link {
    color: $accent;
  }

  &__btn {
    font-size: 14px;
  }
}
</style>
