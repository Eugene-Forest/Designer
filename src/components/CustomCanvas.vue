<template>
  <div id="CustomCanvas"></div>
</template>

<script>
import {MainApplication} from "../GraphicDesigner/app/MainApplication";

export default {
  name: "CustomCanvas",
  methods: {

  },
  mounted() {
    //初始化挂载
    let mainApp= new MainApplication();
    mainApp.createDesigner(600,700,"CustomCanvas");
    //发送给父组件当前的画布引擎
    this.$emit("DesignerApp",mainApp)
  },
}

</script>

<style scoped>

</style>