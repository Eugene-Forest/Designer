import {Sprite} from "pixi.js";
import {PixiBrush} from "./PixiBrush";
import {SvgBrush} from "./SvgBrush";
import {Brush} from "./Brush";
import {EventBo} from "../BO/EventBo";

/**
 * 作为画布基础
 */
export class CanvasPage {
    /** 画布宽度 */
    private _width: number = 800;
    /** 画布高度 */
    private _height: number = 800;
    /** 画布缩放比例 */
    private _scale: number = 1;
    /** 水印 */
    private _watermarks: Sprite[] = [];
    /** 是否自动渲染 */
    private _isAutoRender: boolean = false;

    /** 步骤保存 */
    private _steps: string[] = [];

    /** 父级挂载元素 */
    private _parentEle: HTMLElement;

    private _pixiPainter: PixiBrush;

    private _svgPainter: SvgBrush;

    get watermarks(): Sprite[] {
        return this._watermarks;
    }

    set watermarks(value: Sprite[]) {
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


    public get parentEle(): HTMLElement {
        return this._parentEle;
    }

    public set parentEle(value: HTMLElement) {
        this._parentEle = value;
    }

    public getPainter(isSvg: boolean): Brush {
        if (isSvg) {
            return this._svgPainter;
        } else {
            return this._pixiPainter;
        }
    }

    constructor(parentEle: HTMLElement, width?: number, height?: number, isAutoRender?: boolean, eventBo?: EventBo) {
        this._width = width ? width : 800;
        this._height = height ? height : 800;
        this._isAutoRender = isAutoRender;
        this._parentEle = parentEle;
        //初始化画笔
        this._pixiPainter = new PixiBrush(this);
        this._svgPainter = new SvgBrush();
        //初始化监听事件
        this.InitCanvasPageListener();
    }

    public InitCanvasPageListener() {
        setTimeout(() => {


        }, 10)
    }
}