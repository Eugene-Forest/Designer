import {PixiBrush} from "../DrawingEngine/Canvas/PixiBrush";
import * as PIXI from "pixi.js";
import {BaseBo} from "../DrawingEngine/BO/BaseBo";
import {Graphics} from "pixi.js";


export class CustomPixiBrush extends PixiBrush{


    public paintSomething(): void {
        this.container.removeChildren().forEach(ele=>{
            console.log(ele.name);
            BaseBo.memoryDestroy(ele,true);
        })
        this.renderCanvas();
        // 创建一个半径为32px的圆
        const circle = new PIXI.Graphics();
        circle.name = "circle"
        circle.beginFill(0x1d9ce0);
        circle.drawCircle(0, 0, 32);
        circle.endFill();
        circle.x = 130;
        circle.y = 130;
        circle.interactive = true;

        //目录基础路径基于项目根目录
        const avatar = PIXI.Sprite.from('/cat.png');
        avatar.name = 'cat avatar'
        avatar.scale.set(0.5, 0.5);
        // 居中展示
        avatar.x = 150;
        avatar.y = 150;

        // 可交互
        avatar.interactive = true;
        avatar.buttonMode = true;
        // 监听事件
        avatar.on('click', () => {
            // 透明度
            console.log("click cat")
            avatar.alpha = Math.random()*0.6;
            // 居中展示
            avatar.x = 150 *Math.random();
            avatar.y = 150 * Math.random();
            avatar.render(this.pixiApplication.renderer);
            // this.renderCanvas();
        });
        circle.on("click",()=>{
            // 透明度
            console.log("click circle")
            circle.clear();
            circle.beginFill(0xFFFFE0);
            circle.drawCircle(0, 0, 32 * Math.random());
            circle.endFill();
            circle.render(this.pixiApplication.renderer);
            // this.renderCanvas();
        })



        // // 添加到app.stage里，从而可以渲染出来
        this.container.addChild(circle);

        this.container.addChild(avatar);

        this.renderCanvas();
    }

    public updateSomething():void{
        this.container.children.forEach(ele=>{
            if(ele.name=="circle"){
                console.log(ele.name);
                BaseBo.memoryDestroy(ele,true);
            }
        })
        this.pixiApplication.renderer.clear();
        // 创建一个半径为32px的圆
        const circle = new PIXI.Graphics();
        circle.name = "circle"
        circle.beginFill(0x1d9ce0);
        circle.drawCircle(0, 0, 32*Math.random());
        circle.endFill();
        circle.x = 130 * Math.random();
        circle.y = 130 * Math.random();
        circle.interactive = true;
        circle.buttonMode = true;
        this.container.addChild(circle);
        this.renderCanvas();
    }
}