<template>
  <header class="header container">
    <nav class="header__nav">
      <div>
        <img
          class="header__logo"
          src="/src/assets/images/icons/logo.svg"
          alt=""
        />
      </div>
      <IsHamburger />

      <IsInput v-model="input" />

      <ul class="iconList">
        <li class="iconList__item">
          <isButton>
            <font-awesome-icon icon="user" font-size="22" />
            <span class="iconList__text">Войти</span>
          </isButton>
        </li>
        <li class="iconList__item">
          <isButton>
            <font-awesome-icon icon="bag-shopping" font-size="22" />
            <span class="iconList__text">Заказы</span>
          </isButton>
        </li>
        <li class="iconList__item">
          <isButton>
            <font-awesome-icon icon="fa-heart" font-size="22" />
            <span class="iconList__text">Избранное</span>
            <span class="counter">1</span>
          </isButton>
        </li>
        <li class="iconList__item">
          <isButton>
            <font-awesome-icon icon="cart-shopping" font-size="22" />
            <span class="iconList__text">Корзина</span>
          </isButton>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import isButton from './../UI/isButton.vue'
import IsHamburger from './isHamburger.vue'
import IsInput from '../UI/isInput.vue'
import { ref } from 'vue'

const input = ref('1,')
</script>
<style lang="scss" scoped>
@import 'src/assets/scss/vars';

.header {
  &__nav {
    display: flex;
    gap: 0 20px;
    align-items: center;
    padding: 20px 0;
  }
  &__logo {
    width: 160px;
  }
}

.input {
  position: relative;
  width: 100%;
  input {
    max-width: 100%;
  }
}
.searchBtn {
  position: absolute;
  right: 5px;
  border-radius: 50%;
  background-color: #9b38dc;
  top: 50%;
  transform: translateY(-50%);
  height: 43px;
  width: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: $transition;
  border: 1px solid $accent;
  color: $light;
  &:hover {
    color: $accent;
    background-color: $light;
    border: 1px solid $accent;
  }
}

.iconList {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 32px;
  margin-left: auto;
  color: $dark;
  &__item {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
  }
  &__text {
    display: inline-block;
    padding-top: 5px;
    font-size: 14px;
  }
}

.button {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  &.active .counter {
    display: flex;
  }
}

.counter {
  position: absolute;
  top: -10px;
  right: 18px;
  height: 18px;
  min-width: 24px;
  background-color: $accent;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: $light;
}
</style>
