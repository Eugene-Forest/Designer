<template>
  <div id="CustomCanvas"></div>
</template>

<script>
import {MainApplication} from "../designer/app/MainApplication";

export default {
  name: "CustomCanvas",
  methods: {

  },
  mounted() {
    //初始化挂载
    let mainApp= new MainApplication();
    mainApp.createDesigner();
  },
}

</script>

<style scoped>

</style>