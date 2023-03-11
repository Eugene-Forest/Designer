import {Brush} from "./Brush";
import * as PIXI from "pixi.js";
import {Application, Container, Graphics} from "pixi.js";
import {rePainterType} from "../Helper/GraphInterfacType";

/**
 * 封装 pixi.js 画笔
 */
export class PixiBrush extends Brush {
    /** pixi app */
    private _pixiApplication: Application;
    /** pixi 画布容器；最终挂载到pixi app的画布舞台上 */
    private _container: Container;


    public get pixiApplication(): Application {
        return this._pixiApplication;
    }

    public get container(): Container {
        return this._container;
    }

    /**
     * 渲染画布；重画
     */
    public renderCanvas() {
        this._pixiApplication.render();
    }

    public startRenderCanvas() {
        this._pixiApplication.start();
    }

    public stopRenderCanvas() {
        this._pixiApplication.stop();
        this.renderCanvas();
    }

    constructor(parentElement: HTMLElement, width: number = 800, height: number = 800, isAutoRender: boolean = false) {
        super();
        //画布初始化
        this._pixiApplication = new Application({
            width: width,
            height: height,
            antialias: true,//抗锯齿
            backgroundColor: 0xffffff,//白色
            backgroundAlpha: 1,
            preserveDrawingBuffer: true,
            autoStart: isAutoRender,//自动渲染
        })
        //将pixi画布挂载到父级 Html 元素中
        parentElement.appendChild(this._pixiApplication.view);
        //创建容器
        this._container = new Container();
        //挂载
        this._pixiApplication.stage.addChild(this._container);
    }

    public get PainterType(): rePainterType {
        return rePainterType.Pixi;
    }


    public paintSomething(): void {
        //目录基础路径基于项目根目录
        const avatar = PIXI.Sprite.from('/cat.png');
        avatar.scale.set(0.5, 0.5);
        // 居中展示
        avatar.x = 100;
        avatar.y = 100;

        // 可交互
        avatar.interactive = true;
        // 监听事件
        avatar.on('click', () => {
            // 透明度
            avatar.alpha = Math.random();
            this.renderCanvas();
        });
        this.container.addChild(avatar);

        // 创建一个半径为32px的圆
        const circle = new Graphics();
        circle.beginFill(0x1d9ce0);
        circle.drawCircle(0, 0, 32);
        circle.endFill();
        circle.x = 130;
        circle.y = 130;

        // // 添加到app.stage里，从而可以渲染出来
        this.container.addChild(circle);

        avatar.mask = circle;
        this.renderCanvas();
    }


}