<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <a-row>
        <a-col :span="4">
          <div class="logo">
            <img alt="Vue logo" src="./assets/logo.png" width="50" />
          </div>
        </a-col>
        <a-col :span="4" :offset="16">
          <a-menu
            v-model:selectedKeys="selectedKeys"
            theme="dark"
            mode="horizontal"
            :style="{ lineHeight: '64px' }"
          >
            <a-menu-item key="1"
              ><router-link to="/Store">我的賣場</router-link></a-menu-item
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
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
})
</script>

<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>