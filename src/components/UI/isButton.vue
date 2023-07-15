<template>
  <button :class="className">
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
  align-self: a;
}
.btn {
  border-radius: $big;
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

.btn-outline {
  border-radius: $big;
  color: $accent;
  border: 2px solid $accent;
  background-color: $light;
  &:hover {
    background-color: $accent;
    color: $light;
  }
}
</style>
