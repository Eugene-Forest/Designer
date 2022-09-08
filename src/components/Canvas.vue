<script lang="ts">
import * as PIXI from "pixi.js";
export default {
  methods: {
    initPixi() {
      //创建一个Pixi应用
      const app = new PIXI.Application({ width: 400, height: 300 });
      //创建canvas标签并添加到document文档中
      document.getElementById("canvas").append(app.view);
    },
  },
  mounted() {
    this.initPixi();
  },
};
</script>


<template>
  <div>
    <!-- todo 添加画布的外包框 -->
    <div id="canvas"></div>
  </div>
</template>