<template>
  <header class="header">
    <nav class="header__nav">
      <div>
        <img
          class="header__logo"
          src="/src/assets/images/icons/logo.svg"
          alt=""
        />
      </div>
      <IsHamburger />
      <IsHeaderInput />
      <ul class="iconList">
        <li class="iconList__item">
          <isButton @click="store.commit('openModal')">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                stroke="#565656"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="iconList__text">Войти</span>
          </isButton>
          <IsNotification />
        </li>
        <li class="iconList__item">
          <isButton @click="store.commit('openModal')">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                stroke="#565656"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="iconList__text">Заказы</span>
          </isButton>
        </li>
        <li class="iconList__item">
          <isButton>
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
            <span class="iconList__text">Избранное</span>
            <span class="counter">{{ countFavoriteStatus }}</span>
          </isButton>
        </li>
        <li class="iconList__item">
          <isButton>
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142M4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2M4.78571 5L6.07142 14M6.07142 14L6.25469 15.2828C6.39545 16.2681 7.23929 17 8.23459 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="iconList__text">Корзина</span>
          </isButton>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import isButton from './../UI/isButton.vue'
import IsHamburger from './isHamburger.vue'
import IsHeaderInput from './isHeaderInput.vue'
import IsNotification from './isNotification.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const countFavoriteStatus = computed(
  () => store.state.favorites.filter(item => item.isFavoriteStatus).length
)
</script>
<style lang="scss" scoped>
@import 'src/assets/scss/vars';

.header {
  &__nav {
    display: flex;
    gap: 0 20px;
    align-items: center;
    padding: 14px 0;
  }
  &__logo {
    width: 160px;
  }
}

.input {
  position: relative;
  width: 100%;
  input {
    max-width: 100%;
  }
}
.searchBtn {
  position: absolute;
  right: 5px;
  border-radius: 50%;
  background-color: #9b38dc;
  top: 50%;
  transform: translateY(-50%);
  height: 43px;
  width: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: $transition;
  border: 1px solid $accent;
  color: $light;
  &:hover {
    color: $accent;
    background-color: $light;
    border: 1px solid $accent;
  }
}

.iconList {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 32px;
  margin-left: auto;
  color: $dark;
  &__item {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    & svg {
      height: 24px;
      width: 24px;
    }
  }
  &__text {
    display: inline-block;
    padding-top: 5px;
    font-size: 14px;
  }
}

.button {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  &.active .counter {
    display: flex;
  }
}

.counter {
  position: absolute;
  top: -5px;
  right: 12px;
  height: 18px;
  min-width: 24px;
  background-color: $accent;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: $light;
}
</style>
