import {PixiBrush} from "../DrawingEngine/Canvas/PixiBrush";
import * as PIXI from "pixi.js";


export class CustomPixiBrush extends PixiBrush{


    public paintSomething(): void {
        this.renderCanvas();
        //目录基础路径基于项目根目录
        const avatar = PIXI.Sprite.from('/cat.png');
        avatar.scale.set(0.5, 0.5);
        // 居中展示
        avatar.x = 150;
        avatar.y = 150;

        // 可交互
        avatar.interactive = true;
        // 监听事件
        avatar.on('click', () => {
            // 透明度
            avatar.alpha = Math.random();
            this.renderCanvas();
        });


        // 创建一个半径为32px的圆
        const circle = new PIXI.Graphics();
        circle.beginFill(0x1d9ce0);
        circle.drawCircle(0, 0, 32);
        circle.endFill();
        circle.x = 130;
        circle.y = 130;

        // // 添加到app.stage里，从而可以渲染出来
        this.container.addChild(circle);

        this.container.addChild(avatar);
        this.renderCanvas();
    }
}