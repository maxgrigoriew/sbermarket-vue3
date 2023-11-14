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
    <div class="noty" v-if="isOpen" v-click-outside="closeModal">
      <isButton class="noty__close" @click="isOpen = !isOpen">
        <font-awesome-icon icon="xmark" font-size="18" />
      </isButton>
      <div class="noty__inner">
        <div class="noty__title">Войдите по Сбер ID</div>
        <div class="noty__text">
          Сможете получать бонусы и обменивать их на скидки до 99%
        </div>
        <isButton class="noty__btn btn">Подробнее</isButton>
      </div>
      <img
        class="noty__img"
        src="./../../assets//images/icons/letter.webp"
        alt="letter"
      />
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.noty {
  @import './../../assets/scss/vars';
  position: absolute;
  right: -260px;
  top: 50px;
  min-width: 400px;
  background-color: $black;
  border-radius: $big;
  color: $light;
  padding: 32px;
  z-index: 30;
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 30%;
    z-index: 1;
    width: 40px;
    height: 40px;
    background-color: #1c1f22;
    background-repeat: no-repeat;
    z-index: -1;
    rotate: 50deg;
    transform: skew(50deg, 0);
  }
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
  &__title {
    margin-bottom: 10px;
    font-size: 20px;
  }
  &__text {
    margin-bottom: 24px;
  }
  &__img {
    position: absolute;
    right: -23px;
    bottom: -10px;
  }
}
</style>
