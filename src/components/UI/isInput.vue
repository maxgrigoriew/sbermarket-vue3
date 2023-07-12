<template>
  <input
    class="input"
    type="text"
    :value="props.modelValue"
    v-on:input="updateValue($event.target.value)"
  />
</template>
<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
const props = defineProps(['modelValue'])
function updateValue(value) {
  emit('update:modelValue', value)
}
</script>
<style lang="scss">
@import './/../../assets/scss/vars';

.input {
  border: 2px solid $accent;
  background: #fff;
  height: 50px;
  padding: 0 20px;
}
</style>
