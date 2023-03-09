<script lang="ts">
import * as PIXI from 'pixi.js';
import { Graphics } from 'pixi.js';
export default {
	methods: {
		initPixi() {
			//创建一个Pixi应用
			const app = new PIXI.Application({
				backgroundColor: 0xfb6a8f,
			});
			//创建canvas标签并添加到document中
			document.getElementById('Canvas').append(app.view);
			//目录基础路径基于项目根目录
			const avatar = PIXI.Sprite.from('./public/cat.png');
			avatar.scale.set(0.5, 0.5);
			// 居中展示
			avatar.x = 100;
			avatar.y = 100;

			// 可交互
			avatar.interactive = true;
			// 监听事件
			avatar.on('click', () => {
				// 透明度
				avatar.alpha = 0.5;
			});
			app.stage.addChild(avatar);

			// 创建一个半径为32px的圆
			// const circle = new Graphics();
			// circle.beginFill(0x1d9ce0);
			// circle.drawCircle(0, 0, 32);
			// circle.endFill();
			// circle.x = 130;
			// circle.y = 130;
      //
			// // // 添加到app.stage里，从而可以渲染出来
			// app.stage.addChild(circle);
			// avatar.mask = circle;
      //
      // app.stage.on("mousemove",(event:PIXI.InteractionEvent):void=>{
      //   console.log("mouse move");
      //   circle.x = event.data.global.x;
      //   circle.y = event.data.global.y;
      //
      // })
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
