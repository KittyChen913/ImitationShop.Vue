<template>
  <h2>商品詳情頁</h2>
  <h3>{{ $route.params.itemId }}</h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ItemDetail',
})
</script>

<style scoped>
</style>