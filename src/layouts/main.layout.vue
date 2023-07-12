<script setup lang="ts">
import isHeader from './../components/Header/isHeader.vue'
</script>
<template>
  <div>
    <div class="container">
      <isHeader />
      <slot></slot>
    </div>
  </div>
</template>
