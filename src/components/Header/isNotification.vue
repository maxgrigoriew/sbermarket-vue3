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
    </div>
  </transition>
</template>

<script setup lang="ts">
import isButton from './../UI/isButton.vue'
import { ref } from 'vue'

const isOpen = ref(false)

const closeModal = () => {
  isOpen.value = false
}
</script>
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
  &::before {
    content: '';
    position: absolute;
    top: -23px;
    left: 30%;
    z-index: 1;
    transform: rotateX(180deg) rotateY(180deg);
    transform: scaleX(-1) scaleY(-1);
    width: 40px;
    height: 40px;
    background-image: url('../../assets/images/icons/triangle.svg');
    background-repeat: no-repeat;
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
}
</style>
