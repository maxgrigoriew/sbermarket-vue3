<script setup lang="ts">
import { onMounted, ref } from 'vue'

import isPromo from '../components/isPromo.vue'
import isSlider from './../components/isSlider.vue'
import isShockSlider from './../components/isShockSlider.vue'
import isCookie from './../components/Modals/isCookie.vue'

import { sliders } from './../data-test/top-slider.ts'
import { promoSliders } from './../data-test/promo-slider.ts'
import { search } from './../restapi/brand'

const brand = ref([])

onMounted(async () => {
  brand.value = await search()
})
</script>

<template>12
  <is-login />
  <isSlider class="mb"
            :slidesPerView="1.3"
            :sliders="sliders" />
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
  />

  <isShockSlider :slidesPerView="6" style="margin-bottom: 80px" />
  <isCookie />
</template>

<style lang="scss" scoped>
@import './../assets/scss/vars';

.block img {
  width:      400px;
  height:     400px;
  object-fit: cover;
}

.main {
  padding-top: 40px;
}

.mb {
  margin-bottom: 80px;
}

.banner {
  margin-bottom: $big;

  & img {
    width:         100%;
    height:        170px;
    border-radius: $middle;
    object-fit:    cover;
  }
}
</style>
