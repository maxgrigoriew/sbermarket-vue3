<template>
  <li class="top-link__item">
    <a href="#" class="top-link__link">
      <img class="top-link__icon" :src="props.linkItem.img" alt="link" />
      <span class="top-link__title"> {{ props.linkItem.title }} </span>
    </a>
  </li>
</template>

<script setup lang="ts">
const props = defineProps(['linkItem'])
</script>
<style lang="scss" scoped>
@import '../../assets/scss/vars';
.top-link {
  &__item {
    border-radius: $middle;
    background-color: $gray-light;
    height: 48px;
  }

  &__link {
    display: flex;
    align-items: center;
    padding: 0 15px;
    height: 100%;
    color: $dark;
    font-size: 14px;
  }
  &__icon {
    width: 24px;
    height: 24px;
    display: block;
    margin-right: 6px;
  }
}
</style>
