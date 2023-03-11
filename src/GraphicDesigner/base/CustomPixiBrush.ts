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
        this.container.addChild(avatar);
        this.renderCanvas();
    }
}