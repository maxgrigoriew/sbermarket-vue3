<template>
  <div class="wrapper">
    <swiper
      :slides-per-view="props.slidesPerView"
      :space-between="48"
      :modules="[Navigation, Pagination]"
      :navigation="{
        prevEl: prev,
        nextEl: next
      }"
    >
      <swiper-slide class="slider" v-for="slider in 7" :key="slider">
        <div class="slide">
          <img
            class="slide__action"
            src="./../assets/images/icons/super-price.webp"
            alt=""
          />
          <div class="slide__top">
            <div class="slide__top-bg"></div>
            <img
              class="slide__top-img"
              src="/public/images/shock-slider/1.webp"
              alt=""
            />
            <div class="slide__top-icons">
              <isButton>
                <font-awesome-icon icon="heart" />
              </isButton>
              <isButton>
                <font-awesome-icon icon="ellipsis-vertical" />
              </isButton>
            </div>
            <div class="slide__top-procent">
              <span class="slide__top-procent__num">-32%</span>
            </div>
          </div>
          <div class="slide__bottom">1</div>
        </div>
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
import isButton from './UI/isButton.vue'
import 'swiper/css'

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
  },
  radius: {
    type: String,
    default: '32px'
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
  // & img {
  //   width: 100%;
  //   display: block;
  //   border-radius: $big;
  //   object-fit: cover;
  // }

  &__arrow {
    position: absolute;
    z-index: 20 !important;
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
    cursor: auto;
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
.slide {
  position: relative;
  &__top {
    height: 200px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &-bg {
      height: 100%;
      width: 100%;
      position: absolute;
      background-color: #08090a;
      opacity: 0.03;
      border-radius: $small;
    }
    &-img {
      object-fit: contain;
      height: 100%;
    }
    &-icons {
      position: absolute;
      right: 10px;
      top: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px 0;
    }
    &-procent {
      position: absolute;
      color: $light;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      bottom: -10px;
      left: 0;
      right: 0;
      background-repeat: no-repeat;
      background-size: contain;
      height: 20px;
      object-fit: contain;
      z-index: 1;
      background-image: url('./../assets/images/icons/red-bg.svg');
      &__num {
        display: block;
        width: 50px;
        text-align: center;
      }
    }
  }
  &__action {
    position: absolute;
    top: 0;
    left: 0;
    width: 46px;
    height: 46px;
  }
}
</style>
