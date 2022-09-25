<template>
  <h2>新增商品</h2>
  <a-form
    ref="formRef"
    name="custom-validation"
    v-bind="layout"
    :model="formState"
    :rules="rules"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item name="ItemName" label="商品名稱">
      <a-input v-model:value="formState.ItemName" />
    </a-form-item>
    <a-form-item name="Amount" label="數量">
      <a-input-number v-model:value="formState.Amount" />
    </a-form-item>
    <a-form-item name="Price" label="金額">
      <a-input-number
        v-model:value="formState.Price"
        :formatter="
          (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        "
        :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
      />
    </a-form-item>
    <a-form-item name="Description" label="商品描述">
      <a-textarea v-model:value="formState.Description" />
    </a-form-item>
    <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import type { Rule } from 'ant-design-vue/es/form'
import { defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'

interface FormState {
  ItemName: string
  Amount: number
  Price: number
  Description: string
}
export default defineComponent({
  name: 'AddItem-page',
  setup() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    }

    const formState = reactive<FormState>({
      ItemName: '',
      Amount: 0,
      Price: 0,
      Description: '',
    })

    const rules: Record<string, Rule[]> = {
      ItemName: [{ required: true, trigger: 'change' }],
      Amount: [{ required: true, type: 'number', min: 1, trigger: 'change' }],
      Price: [{ required: true, type: 'number', min: 1, trigger: 'change' }],
      Description: [{ trigger: 'change' }],
    }
    const store = useStore()
    const handleFinish = (values: FormState) => {
      alert('handleFinish')
      store.dispatch('AddStoreItem', formState)
      console.log(values, formState)
    }

    const handleFinishFailed = (errors: any) => {
      alert('handleFinishFailed')
      console.log(errors)
    }

    return {
      formState,
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