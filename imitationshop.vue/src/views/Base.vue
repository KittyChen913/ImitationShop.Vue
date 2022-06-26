<template>
  <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
    <a-row>
      <a-col :span="2">
        <router-link to="/">
          <img
            class="image"
            alt="Vue logo"
            src="@/assets/logo.png"
            width="50"
          />
        </router-link>
      </a-col>
      <a-col :span="4" :offset="14">
        <h4 style="color: #48d1cc">{{ userInfo.UserName }}</h4>
      </a-col>
      <a-col :span="4">
        <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1"
            ><router-link to="/Store">我的賣場</router-link></a-menu-item
          >
          <a-menu-item key="2"
            ><router-link to="/Login">登入</router-link></a-menu-item
          >
        </a-menu>
      </a-col>
    </a-row>
  </a-layout-header>
  <a-layout-content :style="{ padding: '50px 50px', marginTop: '64px' }">
    <div :style="{ background: '#fff', padding: '24px', minHeight: '400px' }">
      <router-view />
    </div>
  </a-layout-content>
  <a-layout-footer :style="{ textAlign: 'center' }">
    Ant Design ©2022 Created by Kitty.Chen
  </a-layout-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'Base-page',
  computed: {
    ...mapState(['userInfo']),
  },
})
</script>

<style lang="less" scoped>
</style>
