<template>
  <input
    class="input"
    type="text"
    :value="props.modelValue"
    @input="updateValue($event.target.value)"
  />
</template>
<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
const props = defineProps(['modelValue'])
function updateValue(value: EventTarget) {
  emit('update:modelValue', value)
}
</script>
<style lang="scss">
@import './/../../assets/scss/vars';

.input {
  border: 2px solid $accent;
  border-radius: $big;
  background: #fff;
  height: 50px;
  padding: 0 20px;
  width: 100%;
  display: block;
}
</style>
