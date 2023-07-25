<template>
  <div class="basket">
    <h2 class="basket__title">Корзина</h2>
    <div class="empty-basket" v-if="true">
      <img
        class="empty-basket__img"
        src="./../assets/images/basket-empty.webp"
        alt="empty-basket"
      />
      <p class="empty-basket__text">
        В корзине пока пусто. <br />
        Войдите и получайте бонусы за покупки
      </p>
      <isButton class="btn btn-outline empty-basket__btn">Войти</isButton>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import './../assets/scss/vars';

.basket {
  color: $black;
  &__title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 64px;
  }
  margin-bottom: 80px;
}

.empty-basket {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__img {
    width: 224px;
    margin-bottom: $small;
  }
  &__text {
    font-weight: 600;
    font-size: 16px;
    max-width: 400px;
    text-align: center;
    margin-bottom: $small;
  }
  &__btn {
    height: 48px;
  }
}
</style>
