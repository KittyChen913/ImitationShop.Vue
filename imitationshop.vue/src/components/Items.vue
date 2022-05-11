<template>
  <h2>商品列表</h2>
  <div>{{ greeting }}</div>
  <a-row :gutter="8">
    <a-col
      :xs="10"
      :sm="8"
      :md="6"
      :lg="4"
      v-for="item in items"
      :key="item.itemId"
    >
      <a-card hoverable>
        <template #cover>
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        </template>
        <a-card-meta v-bind:title="item.itemName">
          <template #description>NT${{ item.itemPrice }}</template>
        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

export default defineComponent({
  name: 'Items-page',
  computed: {
    ...mapState(['items']),
  },
  methods: {
    ...mapActions(['fetchItemList']),
  },
  created() {
    this.fetchItemList({ id: '78' })
  },
})
</script>

<style scoped>
</style>