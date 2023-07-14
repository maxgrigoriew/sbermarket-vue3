<script setup lang="ts">
import IsTopLinks from '../components/Header/isTopLinks.vue'
import isHeader from './../components/Header/isHeader.vue'
</script>
<template>
  <div>
    <div class="container">
      <isHeader />
      <IsTopLinks />
      <slot></slot>
    </div>
  </div>
</template>
