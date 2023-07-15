<template>
  <li class="top-link__item">
    <isButton class="top-link__link">
      <img class="top-link__icon" :src="props.linkItem.img" alt="link" />
      <span class="top-link__title"> {{ props.linkItem.title }} </span>
    </isButton>
  </li>
</template>

<script setup lang="ts">
import isButton from '../UI/isButton.vue'
const props = defineProps(['linkItem'])
</script>
<style lang="scss" scoped>
@import '../../assets/scss/vars';
@import '../../assets/scss/mixins';

.top-link {
  &__item {
    @include button-gray;
  }

  &__link {
    display: flex;
    align-items: center;
    height: 100%;
    color: $dark;
    font-size: 14px;
    transition: $transition;
    &:hover {
      color: $accent;
    }
  }
  &__icon {
    width: 24px;
    height: 24px;
    display: block;
    margin-right: 6px;
  }
}
</style>
