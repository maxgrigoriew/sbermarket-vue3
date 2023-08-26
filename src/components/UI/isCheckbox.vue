<template>
  <input
    type="checkbox"
    :class="className"
    :value="props.modelValue"
    @input="$emit('update:modelValue', $event.target.checked)"
  />
</template>

<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
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
