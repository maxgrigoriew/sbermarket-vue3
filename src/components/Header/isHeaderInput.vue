<template>
  <div class="header-input">
    <isInput v-model="input" />
    <isButton class="btn header-input__btn">
      <font-awesome-icon icon="magnifying-glass" font-size="18" />
    </isButton>
  </div>
</template>

<script setup lang="ts">
import isButton from './../UI/isButton.vue'
import isInput from './../UI/isInput.vue'
import { ref } from 'vue'
const input = ref('')
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
</style>
