import {Brush} from "./Brush";
import {Application, Container} from "pixi.js";
import {CanvasPage} from "./CanvasPage";
import {rePainterType} from "../Helper/GraphInterfacType";

/**
 * 封装 pixi.js 画笔
 */
export class PixiBrush extends Brush{
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

    constructor(canvasPage: CanvasPage) {
        super();
        //画布初始化
        this._pixiApplication = new Application({
            width:canvasPage.width,
            height:canvasPage.height,
            antialias:true,//抗锯齿
            backgroundColor: 0xffffff,//白色
            backgroundAlpha:1,
            preserveDrawingBuffer: true,
            autoStart: canvasPage.isAutoRender,//自动渲染
        })
        //将pixi画布挂载到父级 Html 元素中
        canvasPage.parentEle.appendChild(this._pixiApplication.view);
        //创建容器
        this._container = new Container();
        //挂载
        this._pixiApplication.stage.addChild(this._container);
    }

    public get PainterType(): rePainterType {
        return rePainterType.Pixi;
    }



}