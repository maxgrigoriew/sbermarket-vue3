<template>
  <is-login />
  <!-- <isSlider class="mb" :slidesPerView="1.3" :sliders="sliders" />
    <isPromo class="mb" />
    <div class="banner">
      <img src="/public/images/promo-slider/3.webp" alt="" />
    </div> 
    <isSlider
      :slidesPerView="4"
      :sliders="promoSliders"
      height="340px"
      radius="16px"
      style="margin-bottom: 80px"
    /> -->

  <isShockSlider :slidesPerView="6" style="margin-bottom: 80px" />
</template>

<script setup lang="ts">
import isPromo from '../components/isPromo.vue'
import isSlider from './../components/isSlider.vue'
import isShockSlider from './../components/isShockSlider.vue'
import { sliders } from './../data-test/top-slider.ts'
import { promoSliders } from './../data-test/promo-slider.ts'
// import IsLogin from '../components/Modals/isLogin.vue'
</script>

<style lang="scss" scoped>
@import './../assets/scss/vars';
.main {
  padding-top: 40px;
}
.mb {
  margin-bottom: 80px;
}
.banner {
  margin-bottom: $big;
  & img {
    width: 100%;
    height: 170px;
    border-radius: $middle;
    object-fit: cover;
  }
}
</style>
