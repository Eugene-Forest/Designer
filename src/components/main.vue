<script lang="ts">

import CustomCanvas from './CustomCanvas.vue';
import {MainApplication} from "../designer/app/MainApplication";
export default {
  name:"main",
  components: {
    CustomCanvas
  },
  data(){
    return{
      designerApp:MainApplication
    }
  },
  methods: {
    initApp(app){
      this.designerApp = app;
    },
    drawSomething(){
      console.log("drawsomething",this.designerApp)
      this.designerApp.drawSomething();
    }
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
      <el-aside width="240px" class="radiusBorder">
        <!-- Aside content -->
        <ElButton @click="drawSomething()">测试画图</ElButton>
      </el-aside>
      <el-main class="radiusBorder">
        <CustomCanvas @DesignerApp="this.initApp"></CustomCanvas>
      </el-main>
      <el-aside width="240px" class="radiusBorder">
        <!-- Aside content -->
      </el-aside>
    </el-container>
  </el-container>

</template>



<style scoped>
.radiusBorder {
  border: 1px solid var(--el-border-color);
  border-radius: 2px;
}
</style>