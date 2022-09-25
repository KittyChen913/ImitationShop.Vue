<template>
  <a-form
    ref="formRef"
    name="custom-validation"
    class="register-form"
    :model="formState"
    :rules="rules"
    v-bind="layout"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item> <h2 style="color: #48d1cc">Register User</h2></a-form-item>
    <a-form-item has-feedback label="Name" name="UserName">
      <a-input v-model:value="formState.UserName" />
    </a-form-item>
    <a-form-item has-feedback label="Email" name="MailAddress">
      <a-input v-model:value="formState.MailAddress" />
    </a-form-item>
    <a-form-item has-feedback label="Password" name="Password">
      <a-input
        v-model:value="formState.Password"
        type="password"
        autocomplete="off"
      />
    </a-form-item>
    <a-form-item has-feedback label="Confirm" name="CheckPass">
      <a-input
        v-model:value="formState.CheckPass"
        type="password"
        autocomplete="off"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import type { Rule } from 'ant-design-vue/es/form'
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance } from 'ant-design-vue'
import { useStore } from 'vuex'
interface FormState {
  UserName: string
  Password: string
  CheckPass: string
  MailAddress: string
}
export default defineComponent({
  name: 'register-page',
  setup() {
    const formRef = ref<FormInstance>()
    const formState = reactive<FormState>({
      UserName: '',
      Password: '',
      CheckPass: '',
      MailAddress: '',
    })
    let validatePass = async (_rule: Rule, value: string) => {
      if (value === '') {
        return Promise.reject('Please input the password')
      } else {
        if (formState.CheckPass !== '') {
          formRef.value?.validateFields('CheckPass')
        }
        return Promise.resolve()
      }
    }
    let validatePass2 = async (_rule: Rule, value: string) => {
      if (value === '') {
        return Promise.reject('Please input the password again')
      } else if (value !== formState.Password) {
        return Promise.reject("Two inputs don't match!")
      } else {
        return Promise.resolve()
      }
    }

    const rules: Record<string, Rule[]> = {
      Password: [{ required: true, validator: validatePass, trigger: 'change' }],
      CheckPass: [{ validator: validatePass2, trigger: 'change' }],
      UserName: [{ required: true, trigger: 'change' }],
      MailAddress: [{ type: 'email', trigger: 'change' }],
    }
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    }

    const store = useStore()

    const handleFinish = (values: FormState) => {
      store.dispatch('UserRegister', formState)
      console.log(values, formState)
    }

    const handleFinishFailed = (errors: any) => {
      console.log(errors)
    }

    const resetForm = () => {
      formRef.value?.resetFields()
    }

    return {
      formState,
      formRef,
      rules,
      layout,
      handleFinishFailed,
      handleFinish,
      resetForm,
    }
  },
})
</script>

<style lang="less" scoped>
.register-form {
  height: 100%;
  padding: 120px;
}
</style>