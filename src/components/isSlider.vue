<template>
  <swiper :slides-per-view="1.3" :space-between="24">
    <swiper-slide
      class="slider"
      v-for="slider in sliders"
      :key="slider.src"
      :pagination="{ clickable: true }"
    >
      <img :src="slider.src" alt="" />
    </swiper-slide>

    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev slider__arrow left">
      <font-awesome-icon class="modal__arrow" icon="angle-down" />
    </div>
    <div class="swiper-button-next slider__arrow right">
      <font-awesome-icon class="modal__arrow" icon="angle-down" />
    </div>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { sliders } from './../data-test/top-slider.ts'
// import 'swiper/css/navigation'
import 'swiper/css/pagination'
</script>

<style lang="scss" scoped>
@import './../assets/scss/vars.scss';
.slider {
  background-color: $accent;
  border-radius: $big;
  overflow: hidden;
  position: relative;
  & img {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  &__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: $light;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: $accent;
    }
  }
  &__arrow.left * {
    transform: rotate(90deg);
  }
  &__arrow.right {
    right: 0;
    & * {
      transform: rotate(-90deg);
    }
  }
}
</style>
