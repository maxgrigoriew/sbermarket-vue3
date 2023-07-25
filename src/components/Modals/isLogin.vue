<template>
  <div class="login">
    <div class="login__inner">
      <button class="login__close">
        <font-awesome-icon icon="xmark" font-size="18" />
      </button>
      <div class="login__title">Войдите или зарегистрируйтесь</div>
      <div class="login__subtitle">
        Сможете отслеживать заказы в личном кабинете и тратить бонусы
      </div>
      <div class="login__buttons">
        <isButton class="btn">
          <svg
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13 0C16.0927 0 18.9337 1.08103 21.1657 2.88421L18.6371 4.74793C17.0315 3.64848 15.0899 3.00354 13 3.00354C7.48924 3.00354 3.00587 7.48999 3.00587 13.0013C3.00587 18.5126 7.48924 22.9965 13 22.9965C18.5134 22.9965 22.9968 18.5126 22.9968 13.0013C22.9968 12.9118 22.9941 12.8223 22.9924 12.7328L25.7912 10.6699C25.9289 11.4245 26 12.2055 26 13.0013C26 20.1807 20.1795 26 13 26C5.82135 26 0 20.1807 0 13.0013C0 5.81931 5.82135 0 13 0ZM23.2856 5.05241C23.9006 5.84651 24.4262 6.71169 24.8456 7.63565L13.0002 16.3673L8.05093 13.2628V9.52921L13.0002 12.6337L23.2856 5.05241Z"
              fill=":logoFill:"
            ></path>
          </svg>
          Войти по Сбер ID</isButton
        >
        <isButton class="btn">Войти по номеру телефона</isButton>
      </div>
      <input class="login__checkbox" type="checkbox" />
      <p class="login__capcha">
        При входе и регистрации вы предоставляете Согласие на обработку
        персональных данных в соответствии с Политикой обработки персональных
        данных, а также соглашаетесь с Политикой обработки персональных данных,
        Условиями использования сайта и Правилами программы лояльности. Защита
        от спама reCAPTCHA: Конфиденциальность и Условия использования.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import isButton from './../UI/isButton.vue'
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
    max-width: 400px;
    margin-left: auto;
    background-color: $light;
    height: 100%;
    padding: 24px 40px;
  }
  &__close {
    padding: 12px;
    position: absolute;
    top: 0;
    right: 0;
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
  &__buttons > button {
    background-color: #21a038 !important;
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
