<template>
  <button class="btn" @click="$emit('click')">
    <slot>Кнопка</slot>
  </button>
</template>

<style lang="scss" scoped>
@import './../../assets/scss/vars';
.btn {
  border-radius: 32px;
  background-color: $accent;
  color: $light;
  padding: 10px 24px;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: $transition;
  &:hover {
    background-color: $accent-dark;
  }
}
</style>
