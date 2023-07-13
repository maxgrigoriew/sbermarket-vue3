<template>
  <button :class="className" @click="$emit('click')">
    <slot>Кнопка</slot>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps(['empty'])

const className = computed(() => ({
  'btn-empty': props.empty
}))
</script>
<style lang="scss" scoped>
@import './../../assets/scss/vars';
.btn-empty {
  color: $dark;
  border-radius: none;
  background-color: red;
}
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
