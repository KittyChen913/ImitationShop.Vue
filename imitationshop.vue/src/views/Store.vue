<template>
  <h2>我的賣場</h2>
  <a-row
    style="border-style: groove; margin: 10px; padding: 10px"
    type="flex"
    justify="space-between"
    align="bottom"
  >
    <a-col :span="2" :offset="22">
      <a-button type="primary" @click="$router.push('/addItem')"
        >Add 商品</a-button
      >
    </a-col>
  </a-row>

  <a-list
    item-layout="vertical"
    size="large"
    :grid="{ gutter: 4, xs: 2, sm: 3, md: 4, lg: 4, xl: 6, xxl: 3, xxxl: 2 }"
    :pagination="pagination"
    :data-source="getStoreItemList"
  >
    <template #renderItem="{ item }">
      <a-list-item key="item.storeId">
        <a-card hoverable>
          <template #cover>
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          </template>
          <a-card-meta v-bind:title="item.itemList.ItemName">
            <template #description>NT${{ item.itemList.Price }}</template>
          </a-card-meta>
          <template #actions>
            <!-- <span v-for="{ type, text } in actions" :key="type">
              <component :is="type" style="margin-right: 8px" />
              {{ text }}
            </span>
            <setting-outlined key="setting" /> -->
            <edit-outlined
              key="edit"
              @click="
                $router.push({ path: `/updateItem/${item.itemList.ItemId}` })
              "
            />
            <delete-outlined key="delete" @click="DeleteStoreItem(item)" />
          </template>
        </a-card>
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import {
  // StarOutlined,
  // LikeOutlined,
  // MessageOutlined,
  // SettingOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons-vue'

export default defineComponent({
  name: 'Store-page',
  components: {
    // StarOutlined,
    // LikeOutlined,
    // MessageOutlined,
    // SettingOutlined,
    EditOutlined,
    DeleteOutlined,
  },
  computed: {
    ...mapGetters(['getStoreItemList']),
  },
  methods: {
    ...mapActions(['fetchItemList']),
    ...mapActions(['fetchStoreItemList']),
    ...mapActions(['DeleteStoreItem']),
  },
  created() {
    this.fetchItemList()
    this.fetchStoreItemList()
  },
  setup() {
    const pagination = {
      onChange: (page: number) => {
        console.log(page)
      },
      pageSize: 12,
    }
    const actions: Record<string, string>[] = [
      { type: 'LikeOutlined', text: '156' },
      { type: 'MessageOutlined', text: '2' },
    ]
    return {
      pagination,
      actions,
    }
  },
})
</script>

<style lang="less" scoped>
</style>