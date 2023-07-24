<template>
  <div class="wrapper">
    <swiper
      :slides-per-view="props.slidesPerView"
      :space-between="36"
      :modules="[Navigation, Pagination]"
      :navigation="{
        prevEl: prev,
        nextEl: next
      }"
    >
      <swiper-slide
        class="slider"
        v-for="(slider, ind) in store.state.favorites"
        :key="slider.id"
      >
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
              <isButton
                class="slide__top-icons__btn"
                :class="{ active: slider.isFavoriteStatus }"
                @click="changeFavoriteStatus(slider.id)"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.409 6.675C1.194 11.265 8.539 17.673 12.027 20c3.693-1.903 10.617-8.515 8.618-13.324-1.847-4.441-7.693-2.566-8.618 0-.616-2.538-6.462-4.47-8.618 0Z"
                    fill="#fff"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.918 20.587a2 2 0 0 1-1.98-.11C9.27 19.4 6.693 17.39 4.755 15.065c-.967-1.16-1.858-2.497-2.352-3.919-.502-1.449-.631-3.122.168-4.729 1.422-2.858 4.14-3.65 6.392-3.359a7.054 7.054 0 0 1 3.13 1.202 7.416 7.416 0 0 1 3.204-1.203c2.245-.282 4.963.52 6.224 3.463.69 1.61.558 3.27.075 4.73-.478 1.445-1.333 2.808-2.287 3.995-1.891 2.355-4.472 4.382-6.392 5.342Zm.585-14.853c-.71.415-1.256.973-1.48 1.574-.154-.618-.678-1.194-1.395-1.616C8.805 4.618 5.74 4.541 4.363 7.308c-1.968 3.957 4.56 9.484 7.66 11.49 3.284-1.641 9.438-7.343 7.661-11.49-1.196-2.79-4.277-2.69-6.181-1.574Z"
                    fill="#31373B"
                  />
                </svg>
              </isButton>
              <isButton
                class="slide__top-icons__btn"
                :class="{ active: isFavoriteStatus }"
                @click="changeFavoriteStatus"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="6"
                    fill="#fff"
                    stroke="#1C1F22"
                    stroke-width="2"
                  />
                  <circle
                    cx="15"
                    cy="15"
                    r="6"
                    fill="#fff"
                    stroke="#1C1F22"
                    stroke-width="2"
                  />
                </svg>
              </isButton>
            </div>
            <div class="slide__top-procent">
              <span class="slide__top-procent__num">-32%</span>
            </div>
          </div>
          <div class="slide__bottom">
            <div class="slide__bottom-newprice">
              <span>69p</span>
            </div>
            <div class="slide__bottom-oldprice">
              <span class="slide__bottom-oldprice__num">780 ₽</span>
              <span class="slide__bottom-oldprice__text">Скидка продавца </span>
              <span><font-awesome-icon icon="info" /></span>
            </div>
            <div class="slide__bottom-description">
              Шампунь CARE для увлажнения и питания
            </div>
            <div class="slide__bottom-rating">
              <span
                ><font-awesome-icon v-for="item in 5" :key="item" icon="star"
              /></span>
              <span>454</span>
            </div>
            <isButton class="btn">Купить</isButton>
          </div>
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
import { computed, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import isButton from './UI/isButton.vue'
import 'swiper/css'
import { useStore } from 'vuex'

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

const store = useStore()
const prev = ref(null)
const next = ref(null)
const isFavoriteStatus = ref(true)

const changeFavoriteStatus = (id: number) => {
  store.commit('changeFavoriteStatus', id)
}
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
  padding: 4px;
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
      gap: 6px 0;
      &__btn {
        height: 24px;
        width: 24px;
      }
      &__btn.active {
        svg path {
          fill: $accent;
        }
        svg circle {
          stroke: $accent;
        }
        svg circle:first-child {
          fill: $accent;
        }
      }
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

  &__bottom {
    padding-top: $middle;
    &-newprice {
      font-size: 18px;
      font-weight: 700;
      color: $black;
      & > span {
        margin-right: 6px;
      }
    }
    &-oldprice {
      display: flex;
      gap: 0 4px;
      color: $gray-dark;
      font-size: 14px;
      &__num {
        position: relative;
        &::before {
          position: absolute;
          content: '';
          left: 0;
          right: 0;
          top: 50%;
          height: 1px;
          background-color: red;
        }
      }

      & span:last-child {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 8px;
        align-self: center;
        border: 1px solid $gray;
        svg {
          padding-left: 1px;
        }
      }
    }
    &-description {
      font-size: 14px;
      color: $black;
      margin-bottom: 2px;
    }
    &-rating {
      display: flex;
      align-items: center;
      gap: 0 6px;
      font-size: 14px;
      color: $gray-dark;
      font-weight: 500;
      margin-bottom: 20px;
      & span:first-child {
        height: 14px;
        color: $gold;
        font-size: 10px;
      }
      & span:not(:last-child) svg {
        margin-right: 4px;
      }
    }
  }
}
</style>
