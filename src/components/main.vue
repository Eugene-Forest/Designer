<script lang="ts">

import CanvasVue from './Pixi/Canvas.vue';
export default {
  name:"MainCanvas",
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

</template>



<style scoped>
.radiusBorder {
  border: 1px solid var(--el-border-color);
  border-radius: 0;
}
</style>