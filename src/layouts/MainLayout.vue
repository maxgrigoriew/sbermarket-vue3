<script setup lang="ts">
import IsSelectModal from '../components/Header/isSelectModal.vue'
import isTopLinks from '../components/Header/isTopLinks.vue'
import isHeader from './../components/Header/isHeader.vue'
</script>
<template>
  <div>
    <div class="container">
      <isHeader />
      <div class="top">
        <isTopLinks />
        <IsSelectModal />
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 20px;
}
</style>
