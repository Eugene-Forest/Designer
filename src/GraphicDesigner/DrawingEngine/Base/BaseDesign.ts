import * as PIXI from "pixi.js-legacy";
import {PixiBrush} from "../Canvas/PixiBrush";
import {SvgBrush} from "../Canvas/SvgBrush";
import {Brush} from "../Canvas/Brush";
import {EventBo} from "../BO/EventBo";

/**
 * 作为画布基础
 */
export class BaseDesign<PixiArgs extends PixiBrush, SvgArgs extends SvgBrush> {
    /** 画布宽度 */
    private _width: number = 800;
    /** 画布高度 */
    private _height: number = 800;
    /** 画布缩放比例 */
    private _scale: number = 1;
    /** 水印 */
    private _watermarks: PIXI.Sprite[] = [];
    /** 是否自动渲染 */
    private _isAutoRender: boolean = false;

    /** 步骤保存 */
    private _steps: string[] = [];

    private readonly _pixiPainter: PixiArgs | PixiBrush;

    private readonly _svgPainter: SvgArgs | SvgBrush;

    // private _page: BasePage<PixiArgs, SvgArgs>;

    // public get page(): BasePage<PixiArgs, SvgArgs> {
    //     return this._page;
    // }
    get watermarks(): PIXI.Sprite[] {
        return this._watermarks;
    }

    set watermarks(value: PIXI.Sprite[]) {
        this._watermarks = value;
    }

    get isAutoRender(): boolean {
        return this._isAutoRender;
    }

    set isAutoRender(value: boolean) {
        this._isAutoRender = value;
    }

    get steps(): string[] {
        return this._steps;
    }

    set steps(value: string[]) {
        this._steps = value;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    get scale(): number {
        return this._scale;
    }

    set scale(value: number) {
        this._scale = value;
    }

    /**
     * 获取画笔对象
     * @param {boolean} isSvg
     * @returns {Brush}
     */
    public getPainter(isSvg: boolean): Brush {
        if (isSvg) {
            return this._svgPainter;
        } else {
            return this._pixiPainter;
        }
    }

    public getStage(){
        return this._pixiPainter.stage;
    }

    constructor(parentEle: HTMLElement, width?: number, height?: number, isAutoRender?: boolean, pixiPainter?: PixiArgs, svgPainter?: SvgArgs, eventBo?: EventBo) {
        this._width = width ? width : 800;
        this._height = height ? height : 800;
        this._isAutoRender = isAutoRender;
        //初始化画笔
        if (pixiPainter) {
            this._pixiPainter = pixiPainter;
        } else {
            this._pixiPainter = new PixiBrush(
                parentEle,
                width,
                height,
                isAutoRender);
        }
        if (svgPainter) {
            this._svgPainter = svgPainter;
        } else {
            this._svgPainter = new SvgBrush();
        }
        //初始化监听事件
        this.InitCanvasPageListener();
    }

    public InitCanvasPageListener() {

        //初始化总的画布监听事件


        console.log("初始化监听事件")
        this.getStage().interactive = true;
        let isInSage = false;
        this.getStage().on("mousedown",(event:PIXI.InteractionEvent)=>{
            console.log("左键点下")
        })
        this.getStage().on("pointerover",(event:PIXI.InteractionEvent)=>{
            console.log("进入舞台")
            isInSage = true;
        })
        this.getStage().on("mousemove",(event:PIXI.InteractionEvent)=>{
            if(isInSage){
                console.log("移动")
            }
        })
        this.getStage().on("pointerout",(event:PIXI.InteractionEvent)=>{
            console.log("离开舞台")
            isInSage=false;
        })
        this.getStage().on("mouseup",(event:PIXI.InteractionEvent)=>{
            console.log("左键提起")
        })
        //滚轮事件
        this.getStage().on("wheel",(event:PIXI.InteractionEvent)=>{
            console.log("滚轮")
        })
        this.getStage().on("rightdown",(event:PIXI.InteractionEvent)=>{
            console.log("右键")
        })
    }

}