<template>
  <a-layout
    class="login"
    style="height: 100%; padding: 100px; background-color: #48d1cc"
  >
    <a-row
      style="height: 100%; background-color: white"
      type="flex"
      justify="center"
      align="middle"
    >
      <a-col :span="12" type="flex" justify="center" align="middle">
        <img class="image" alt="Vue logo" src="@/assets/logo.png"
      /></a-col>
      <a-col :span="12" style="height: 100%; padding: 40px">
        <div
          style="
            height: 100%;
            padding: 40px;
            box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.2);
          "
        >
          <a-form
            :model="formState"
            name="normal_login"
            class="login-form"
            @submit="onSubmit"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
          >
            <a-form-item
              label="Username"
              name="UserName"
              :rules="[
                { required: true, message: 'Please input your username!' },
              ]"
            >
              <a-input v-model:value="formState.UserName">
                <template #prefix>
                  <UserOutlined class="site-form-item-icon" />
                </template>
              </a-input>
            </a-form-item>

            <a-form-item
              label="Password"
              name="Password"
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input-password v-model:value="formState.Password">
                <template #prefix>
                  <LockOutlined class="site-form-item-icon" />
                </template>
              </a-input-password>
            </a-form-item>

            <a-form-item>
              <a-button
                :disabled="disabled"
                type="primary"
                html-type="submit"
                class="login-form-button"
              >
                Log in
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
interface FormState {
  UserName: string
  Password: string
}
export default defineComponent({
  name: 'login-page',
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const formState = reactive<FormState>({
      UserName: '',
      Password: '',
    })

    const store = useStore()
    const handleLogin = () => {
      store.dispatch('UserLogin', formState)
    }

    const onFinish = (values: any) => {
      console.log('Success:', values)
    }

    const onSubmit = (e: Event) => {
      console.log('Submit:', e)
      handleLogin()
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo)
      alert('Failed')
    }
    const disabled = computed(() => {
      return !(formState.UserName && formState.Password)
    })
    return {
      formState,
      onSubmit,
      onFinish,
      onFinishFailed,
      disabled,
    }
  },
})
</script>

<style lang="less" scoped>
.login-form {
  max-width: 300px;
}
.login-form-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.login-form-forgot {
  margin-bottom: 24px;
}
.login-form-button {
  width: 100%;
}
</style>
