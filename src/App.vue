<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
  import MainLayout from "./layouts/main.layout.vue";

  export default {
    components: {
      MainLayout,
    },
    computed: {
      layout() {
        return this.$route.meta.layout;
      },
    },
  };
</script>
