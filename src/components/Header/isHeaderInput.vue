<template>
  <div class="header-input">
    <isInput :class="{ headerInputComponent: isOpen }" v-model="input" />
    <isButton class="btn header-input__btn">
      <font-awesome-icon icon="magnifying-glass" font-size="18" />
    </isButton>
    <div class="offer">
      <div class="offer__title">Часто ищут</div>
      <ul class="offer__list">
        <li class="offer__item">
          <span class="offer__icon"
            ><font-awesome-icon icon="magnifying-glass"
          /></span>
          <span class="offer__text">Сахар</span>
        </li>
        <li class="offer__item">
          <span class="offer__icon"
            ><font-awesome-icon icon="magnifying-glass"
          /></span>
          <span class="offer__text">Мука</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import isButton from './../UI/isButton.vue'
import isInput from './../UI/isInput.vue'
import { ref } from 'vue'
const input = ref('')
const isOpen = ref(true)
</script>

<style lang="scss" scoped>
@import './../../assets/scss/vars';
.header-input {
  position: relative;
  width: 100%;
  &__btn {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    background-color: $accent;
    width: 42px;
    height: 42px;
    color: $light;
    &:hover {
      background-color: $accent-dark;
    }
  }
}
.headerInputComponent {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border: 2px solid $light;
  box-shadow:
    0 0 2px rgba(0, 0, 0, 0.08),
    0 2px 24px rgba(0, 0, 0, 0.06);
}
.offer {
  position: absolute;
  top: 50px;
  background-color: $light;
  left: 0;
  right: 0;
  min-height: 100px;
  box-shadow: $shadow;
  padding: $middle;
  padding-top: $pre-big;
  border-bottom-right-radius: $pre-big;
  border-bottom-left-radius: $pre-big;
  color: $black;
  font-size: 14px;
  z-index: 10;
  &__item {
    cursor: pointer;
    &:hover .offer__text {
      color: $accent;
    }
  }
  &__item:not(:last-child) {
    margin-bottom: 6px;
  }
  &__title {
    font-weight: 700;
    margin-bottom: 10px;
  }
  &__icon {
    margin-right: 10px;
    color: $gray;
  }
  &__text {
    transition: $transition;
  }
}
</style>
