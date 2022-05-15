<template>
  <h2>商品列表</h2>
  <a-row :gutter="8">
    <a-col
      :xs="12"
      :sm="8"
      :md="6"
      :lg="4"
      v-for="item in items"
      :key="item.ItemId"
    >
      <a-card hoverable @click="goToItemDetail(item.ItemId)">
        <template #cover>
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        </template>
        <a-card-meta v-bind:title="item.ItemName">
          <template #description>NT${{ item.Price }}</template>
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
    goToItemDetail(itemId: never) {
      this.$router.push({ path: `/itemDetail/${itemId}` })
    },
  },
  created() {
    this.fetchItemList()
  },
})
</script>

<style scoped>
</style>