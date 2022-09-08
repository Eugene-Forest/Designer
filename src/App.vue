<script lang="ts">

import CanvasVue from './components/Canvas.vue';
export default {
  components: {
    CanvasVue
  },
  methods: {

  },
  mounted() {

  },
};
</script>


<!-- 主界面结构 -->
<template>
  <el-row :gutter="24" class="radiusBorder">
    <h1>Designer</h1>
  </el-row>
  <el-row :gutter="24" class="radiusBorder">
    <el-container>
      <el-header class="radiusBorder">
        <!-- Header content -->
      </el-header>
      <el-container>
        <el-aside width="200px" class="radiusBorder">
          <!-- Aside content -->
        </el-aside>
        <el-main class="radiusBorder">
          <CanvasVue></CanvasVue>
        </el-main>
        <el-aside width="200px" class="radiusBorder">
          <!-- Aside content -->
        </el-aside>
      </el-container>
    </el-container>

  </el-row>
</template>



<style scoped>
.radiusBorder {
  border: 1px solid var(--el-border-color);
  border-radius: 0;
}
</style>