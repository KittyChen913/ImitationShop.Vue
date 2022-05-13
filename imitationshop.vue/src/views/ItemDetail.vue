<template>
  <h2>商品詳情頁</h2>
  <h3>{{ $route.params.itemId }}</h3>
  <a-row justify="center">
    <a-col :span="12">
      <a-image-preview-group>
        <a-row justify="center">
          <a-col>
            <a-image :width="200" src="https://aliyuncdn.antdv.com/vue.png" />
          </a-col>
        </a-row>
        <a-row justify="center">
          <a-col>
            <a-image :width="50" src="https://aliyuncdn.antdv.com/logo.png" />
            <a-image :width="50" src="https://aliyuncdn.antdv.com/vue.png" />
            <a-image :width="50" src="https://aliyuncdn.antdv.com/logo.png" />
            <a-image :width="50" src="https://aliyuncdn.antdv.com/vue.png" />
          </a-col>
        </a-row>
      </a-image-preview-group>
    </a-col>
    <a-col :span="12">
      <a-form>
        <a-form-item>
          <h2 class="ant-form-text">{{ itemDetail.ItemName }}</h2>
        </a-form-item>
        <a-form-item label="價格">
          <span class="ant-form-text">{{ itemDetail.Price }}</span>
        </a-form-item>
        <a-form-item label="數量">
          <span class="ant-form-text">{{ itemDetail.Amount }}</span>
        </a-form-item>
        <a-form-item label="上架時間">
          <span class="ant-form-text">{{ itemDetail.CreateDate }}</span>
        </a-form-item>
        <a-form-item label="商品詳情">
          <span class="ant-form-text">{{ itemDetail.Description }}</span>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState, mapActions } from 'vuex'

export default defineComponent({
  name: 'ItemDetail-page',
  computed: {
    ...mapState(['itemDetail']),
  },
  methods: {
    ...mapActions(['fetchItemDetail']),
  },
  created() {
    this.fetchItemDetail(this.$route.params.itemId)
  },
})
</script>

<style scoped>
</style>