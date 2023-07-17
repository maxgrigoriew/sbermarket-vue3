<template>
  <div class="wrapper">
    <swiper
      :slides-per-view="props.slidesPerView"
      :space-between="24"
      :modules="[Navigation, Pagination]"
      :navigation="{
        prevEl: prev,
        nextEl: next
      }"
      :pagination="{ clickable: true }"
    >
      <swiper-slide
        class="slider"
        v-for="slider in props.sliders"
        :key="slider.src"
      >
        <img :src="slider.src" alt="" :style="{ height: props.height }" />
      </swiper-slide>
    </swiper>
    <div ref="prev" class="swiper-button-prev slider__arrow left">
      <font-awesome-icon class="modal__arrow" icon="angle-down" />
    </div>
    <div ref="next" class="swiper-button-next slider__arrow right">
      <font-awesome-icon class="modal__arrow" icon="angle-down" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
// import 'swiper/css/navigation'

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

const prev = ref(null)
const next = ref(null)
</script>

<style lang="scss" scoped>
@import './../assets/scss/vars.scss';
.wrapper {
  position: relative;
}
.slider {
  overflow: hidden;
  position: relative;
  & img {
    width: 100%;
    display: block;
    border-radius: $big;
    object-fit: cover;
  }

  &__arrow {
    position: absolute;
    z-index: 200;
    top: 50%;
    z-index: 20000;
    width: 50px !important;
    height: 50px !important;
    border-radius: 50%;
    background-color: $light;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: $shadow;
    &:hover {
      color: $accent;
    }
  }
  &__arrow.swiper-button-disabled {
    opacity: 0.5;
  }
  &__arrow.left {
    left: -25px;
    transform: translate(0, -50%) rotate(90deg);
  }
  &__arrow.right {
    right: -25px;
    transform: translate(0, -50%) rotate(-90deg);
  }
}
</style>
