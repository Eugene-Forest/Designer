<script lang="ts">
import * as PIXI from "pixi.js";
export default {
  methods: {
    initPixi() {
      //创建一个Pixi应用
      const app = new PIXI.Application({
        backgroundColor: 0x1d9ce0
      });
      //创建canvas标签并添加到document中
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
    <div id="canvas"></div>
  </div>
</template>