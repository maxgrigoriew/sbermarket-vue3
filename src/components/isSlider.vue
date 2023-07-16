<template>
  <swiper
    :slides-per-view="props.slidesPerView"
    :space-between="24"
    :modules="[Navigation]"
    :navigation="true"
  >
    <swiper-slide
      class="slider"
      v-for="slider in props.sliders"
      :key="slider.src"
    >
      <img :src="slider.src" alt="" :style="{ height: props.height }" />
    </swiper-slide>
  </swiper>
  <!-- <div class="swiper-button-prev slider__arrow left">
    <font-awesome-icon class="modal__arrow" icon="angle-down" />
  </div>
  <div class="swiper-button-next slider__arrow right">
    <font-awesome-icon class="modal__arrow" icon="angle-down" />
  </div> -->
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const props = defineProps({
  slidesPerView: {
    type: Number,
    default: 1,
    require: true
  },
  sliders: {
    type: [],
    require: true
  },
  height: {
    type: String,
    default: '400px'
  }
})
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
    // height: 400px;
    object-fit: cover;
  }

  &__arrow {
    position: absolute;
    z-index: 20;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20000;
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
.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 50%;
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--swiper-navigation-color, var(--swiper-theme-color));
}
</style>
