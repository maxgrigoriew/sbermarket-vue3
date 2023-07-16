<template>
  <ul class="promo">
    <li class="promo__item" v-for="item in 4" :key="item">
      <img src="/public/images/promo-slider/1.webp" alt="" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import './../assets/scss/vars';
.promo {
  display: flex;
  column-gap: 24px;
  &__item {
    & img {
      width: 100%;
      height: 340px;
      border-radius: $big;
      object-fit: cover;
    }
  }
}
</style>
