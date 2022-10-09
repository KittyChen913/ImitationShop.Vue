<template>
  <h2>修改商品</h2>
  <a-form
    ref="formRef"
    name="custom-validation"
    v-bind="layout"
    :model="itemDetail"
    :rules="rules"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item name="ItemName" label="商品名稱">
      <a-input v-model:value="itemDetail.ItemName" />
    </a-form-item>
    <a-form-item name="Amount" label="數量">
      <a-input-number v-model:value="itemDetail.Amount" />
    </a-form-item>
    <a-form-item name="Price" label="金額">
      <a-input-number
        v-model:value="itemDetail.Price"
        :formatter="
          (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        "
        :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
      />
    </a-form-item>
    <a-form-item name="Description" label="商品描述">
      <a-textarea :rows="6" v-model:value="itemDetail.Description" />
    </a-form-item>
    <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import type { Rule } from 'ant-design-vue/es/form'
import { defineComponent } from 'vue'
import { mapState, mapActions, useStore } from 'vuex'
import moment from 'moment'

export default defineComponent({
  name: 'AddItem-page',
  computed: {
    ...mapState(['itemDetail']),
  },
  methods: {
    ...mapActions(['fetchItemDetail']),
    formattedDateTime(dateTime: moment.MomentInput) {
      return moment(dateTime).format('YYYY/MM/DD HH:mm:SS')
    },
  },
  created() {
    this.fetchItemDetail(this.$route.params.itemId)
  },
  setup() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    }

    const rules: Record<string, Rule[]> = {
      ItemName: [{ required: true, trigger: 'change' }],
      Amount: [{ required: true, type: 'number', min: 1, trigger: 'change' }],
      Price: [{ required: true, type: 'number', min: 1, trigger: 'change' }],
      Description: [{ trigger: 'change' }],
    }
    const store = useStore()
    const handleFinish = (values: any) => {
      console.log(values)
      store.dispatch('UpdateItem', store.state.itemDetail)
    }

    const handleFinishFailed = (errors: any) => {
      console.log(errors)
    }

    return {
      rules,
      layout,
      handleFinishFailed,
      handleFinish,
    }
  },
})
</script>

<style scoped>
</style>