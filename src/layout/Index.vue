<template>
  <div class="app-wrapper">
    <div></div>
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Navbar,Sidebar,AppMain } from "./components"

export default defineComponent({
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
})
</script>

<style lang="less" scoped>
@import "~@/styles/variables.less";
</style>