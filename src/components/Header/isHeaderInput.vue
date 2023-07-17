<template>
  <div class="header-input" v-click-outside="closeOfferModal">
    <isInput
      class="header-input__component"
      :class="{ headerInputComponent: isOpenOffer }"
      v-model="input"
      @click="openOfferModal"
    />
    <isButton class="btn header-input__btn" @click="addLocalStorage">
      <font-awesome-icon icon="magnifying-glass" font-size="18" />
    </isButton>

    <transition name="fade">
      <div class="offer" v-if="isOpenOffer">
        <div class="offer__history" v-if="historySearch.length > 0">
          <div class="offer__history-top">
            <div class="offer__history-title">Вы недавно искали</div>
            <isButton class="offer__history-btn" @click="clearHistory"
              >Очистить</isButton
            >
          </div>
          <ul class="offer__list offer__history-list">
            <li
              class="offer__item"
              v-for="item in historySearch"
              :key="item"
              @click="addWordInput(item.title)"
            >
              <span class="offer__icon"
                ><font-awesome-icon icon="magnifying-glass"
              /></span>
              <span class="offer__text">{{ item.title }}</span>
              <font-awesome-icon
                class="offer__history-close"
                icon="xmark"
                font-size="18"
                @click.stop="clearHistoryItem(item.id)"
              />
            </li>
          </ul>
        </div>
        <div class="offer__title">Часто ищут</div>
        <ul class="offer__list">
          <li
            class="offer__item"
            v-for="item in 4"
            :key="item"
            @click="addWordInput(item)"
          >
            <span class="offer__icon"
              ><font-awesome-icon icon="magnifying-glass"
            /></span>
            <span class="offer__text">Сахар + {{ item }}</span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import isButton from './../UI/isButton.vue'
import isInput from './../UI/isInput.vue'
import { onMounted, ref } from 'vue'
const input = ref('')
const isOpenOffer = ref(false)
let historySearch = ref([])

const openOfferModal = () => (isOpenOffer.value = true)
const closeOfferModal = () => (isOpenOffer.value = false)
const addWordInput = (item: string) => {
  input.value = item
  closeOfferModal()
}

const addLocalStorage = () => {
  interface NewSearchWord {
    id: number
    title: string
  }
  const newSearhWord = {
    id: Date.now(),
    title: input.value.toLocaleLowerCase()
  } as NewSearchWord
  if (input.value) {
    historySearch.value.push(newSearhWord)
    localStorage.setItem('historySearch', JSON.stringify(historySearch.value))
    closeOfferModal()
  }
}

const clearHistory = () => {
  historySearch.value = []
  localStorage.setItem('historySearch', JSON.stringify([]))
}

const clearHistoryItem = (id: number) => {
  historySearch.value = historySearch.value.filter((searchWord: any) => {
    return searchWord.id !== id
  })
  localStorage.setItem('historySearch', JSON.stringify(historySearch.value))
  input.value = ''
}

onMounted(() => {
  if (localStorage.getItem('historySearch')) {
    historySearch.value = JSON.parse(localStorage.getItem('historySearch'))
  }
})
</script>

<style lang="scss" scoped>
@import './../../assets/scss/vars';
.header-input {
  position: relative;
  width: 100%;
  &__btn {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    background-color: $accent;
    width: 42px;
    height: 42px;
    color: $light;
    &:hover {
      background-color: $accent-dark;
    }
  }
}
.headerInputComponent {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border: 2px solid $light;
  box-shadow:
    0 0 2px rgba(0, 0, 0, 0.08),
    0 2px 24px rgba(0, 0, 0, 0.06);
  outline: none;
}
.offer {
  position: absolute;
  top: 50px;
  background-color: #fff;
  left: 0;
  right: 0;
  min-height: 100px;
  box-shadow: $shadow;
  padding-top: $pre-big;
  border-bottom-right-radius: $pre-big;
  border-bottom-left-radius: $pre-big;
  color: $black;
  font-size: 14px;
  z-index: 10;
  padding: $pre-big 0;
  &__history {
    &-list {
      padding-bottom: $pre-big;
    }
    &-top {
      display: flex;
      padding: 0 $pre-big;
      justify-content: space-between;
      margin-bottom: 6px;
    }
    &-title {
      font-weight: 700;
      margin-right: 10px;
    }
    &-btn {
      color: $gray;
      transition: $transition;
      &:hover {
        color: $accent;
      }
    }
    &-close {
      transition: $transition;
      margin-left: auto;
      color: $gray;
      &:hover {
        color: $accent;
      }
    }
  }
  &__item {
    cursor: pointer;
    transition: $transition;
    padding: 5px $pre-big;
    display: flex;
    &:hover {
      background-color: $gray-light;
    }
    &:hover .offer__text {
      color: $accent;
    }
  }
  &__item:not(:last-child) {
    margin-bottom: 6px;
  }
  &__title {
    font-weight: 700;
    padding: 0 $pre-big;
    margin-bottom: 6px;
  }
  &__icon {
    margin-right: 10px;
    color: $gray;
  }
  &__text {
    transition: $transition;
  }
}
</style>
