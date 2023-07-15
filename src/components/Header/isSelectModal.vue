<template>
  <div class="modal">
    <isButton class="modal__select" @click="isOpen = !isOpen">
      <span class="modal__select-title">Московская область</span>
      <font-awesome-icon
        class="modal__arrow"
        :class="{ active: isOpen }"
        icon="angle-down"
      />
    </isButton>
    <transition name="fade">
      <div class="modal__content" v-if="isOpen" v-click-outside="closeModal">
        <div class="modal__top">
          <div class="modal__subtitle">Ваш регион</div>
          <isButton class="modal__close">
            <font-awesome-icon
              icon="xmark"
              font-size="18"
              @click="closeModal"
            />
          </isButton>
        </div>
        <div class="modal__middle">
          <div class="modal__title">Московская область</div>
          <isButton class="modal__change">Изменить</isButton>
        </div>
        <div class="modal__bottom">
          <div class="modal__text">
            Укажите ваш адрес — при выборе товаров увидите, доступна ли
            экспресс-доставка
          </div>
          <isButton class="modal__button btn btn-outline">
            <span>Указать адрес</span>
          </isButton>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import isButton from '../UI/isButton.vue'

const isOpen = ref<Boolean>(false)
const closeModal = () => (isOpen.value = false)
</script>

<style lang="scss" scoped>
@import './../../assets/scss/mixins.scss';
@import './../../assets/scss/vars.scss';
.modal {
  @include button-gray;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  color: $dark;
  &__select {
    padding: 0 15px;
    height: 100%;
    &-title {
      display: inline-block;
      margin-right: 4px;
    }
  }
  &__arrow {
    color: $accent;
    transition: $transition;
  }
  &__arrow.active {
    transform: rotate(180deg);
  }
  &__content {
    position: absolute;
    z-index: 10;
    top: 60px;
    right: 0;
    box-shadow: $shadow;
    border-radius: $middle;
    background-color: $light;
    padding: 24px;
    min-width: 600px;
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;
    font-weight: 600;
  }
  &__close {
    transition: $transition;
    &:hover svg {
      color: $gray;
    }
  }
  &__middle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  &__title {
    font-weight: 700;
    font-size: 24px;
  }
  &__change {
    color: $accent;
  }
  &__bottom {
    background-color: $gray-light;
    border-radius: $middle;
    padding: $middle;
  }
  &__text {
    margin-bottom: 16px;
  }
}
</style>
