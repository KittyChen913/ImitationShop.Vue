<template>
  <a-layout>
    <router-view />
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
})
</script>

<style>
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>