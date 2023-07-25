<template>
  <transition name="fade">
    <div class="login" v-if="store.state.isOpenLoginModal">
      <div class="login__inner" v-click-outside="closeModal">
        <button class="login__close" @click="store.commit('closeModal')">
          <font-awesome-icon icon="xmark" font-size="18" />
        </button>
        <div>
          <h3 class="login__title">Войдите или зарегистрируйтесь</h3>
          <p class="login__subtitle">
            Сможете отслеживать заказы в личном кабинете и тратить бонусы
          </p>
        </div>
        <div class="login__buttons">
          <isButton class="btn"> Войти по Сбер ID</isButton>
          <isButton class="btn">Войти по номеру телефона</isButton>
        </div>
        <div>
          <label class="login__label">
            <input class="login__checkbox" type="checkbox" />
            <span
              >Получать информацию о скидках, специальных предложениях и
              акциях</span
            >
          </label>
          <p class="login__capcha">
            При входе и регистрации вы предоставляете Согласие на обработку
            персональных данных в соответствии с Политикой обработки
            персональных данных, а также соглашаетесь с Политикой обработки
            персональных данных, Условиями использования сайта и Правилами
            программы лояльности. Защита от спама reCAPTCHA: Конфиденциальность
            и Условия использования.
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import isButton from './../UI/isButton.vue'
import { useStore } from 'vuex'

const store = useStore()

const closeModal = (): void => {
  store.commit('closeModal')
}
</script>

<style lang="scss">
@import './../../assets//scss/vars';
.login {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 40;
  background-color: rgba(0, 0, 0, 0.5);

  &__inner {
    max-width: 450px;
    margin-left: auto;
    height: 100%;
    padding: 24px 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 15% 0;
    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: $light;
      z-index: -1;
    }
    &::after {
      content: '';
      position: absolute;
      right: -60px;
      top: -20px;
      z-index: -1;
      max-width: 440px;
      width: 100%;
      height: 400px;
      background-image: url('./../../assets/images/icons/sber-bg.svg');
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  &__close {
    padding: 12px;
    position: absolute;
    top: 0;
    right: 0;
    transition: $transition;
    &:hover {
      color: $dark;
    }
  }
  &__title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 8px;
    color: $black;
    line-height: 1.3;
  }
  &__subtitle {
    font-size: 16px;
    color: $black;
  }
  &__buttons {
    margin-bottom: 20px;
    & button:first-child {
      background-color: $green;
      &:hover {
        background-color: $green-dark;
      }
    }
    & button:last-child {
      background-color: $gray-light;
      color: $dark;
      &:hover {
        background-color: #d2d3d6;
      }
    }
  }
  &__buttons > button {
    width: 100%;
    margin-bottom: 10px;
    height: 48px;
    transition: $transition;
  }
  &__label {
    font-size: 10px;
    display: flex;
    align-items: flex-start;
    cursor: pointer;
  }
  &__checkbox {
    margin-top: 4px;
    margin-right: 10px;
    cursor: pointer;
  }
  &__capcha {
    font-size: 10px;
  }
}
</style>
