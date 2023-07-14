<template>
  <ul class="top-links">
    <isTopLink v-for="linkItem in topLinks" :linkItem="linkItem" />
  </ul>
</template>
<script lang="ts" setup>
import { topLinks } from './../../data-test/top-links.js'
import isTopLink from './isTopLink.vue'
</script>
<style lang="scss" scoped>
@import './../../assets/scss/vars';
.top-links {
  display: flex;
  grid-auto-flow: column;
  grid-gap: 10px;
  padding: 10px 0;
}
</style>
