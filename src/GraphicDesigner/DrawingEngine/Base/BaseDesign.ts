import {PixiBrush} from "../Canvas/PixiBrush";
import {SvgBrush} from "../Canvas/SvgBrush";
import {Brush} from "../Canvas/Brush";
import {EventBo} from "../BO/EventBo";
import {ListeningType} from "../Helper/GraphInterfacType";

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

    private _listeningType:ListeningType = ListeningType.BaseCanvas;

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

    public get listeningType(): ListeningType {
        return this._listeningType;
    }

    public set listeningType(value: ListeningType) {
        this._listeningType = value;
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

    // public getStage(){
    //     return this._pixiPainter.stage;
    // }

    public getContainer(){
        return this._pixiPainter.container;
    }

    public getBaseCanvas(){
        return this._pixiPainter.baseCanvasRect;
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
        this.initBaseCanvasListener();
    }

    /**
     * 初始化画布监听事件
     */
    public initBaseCanvasListener() {
        //初始化画布监听事件
        console.log("初始化画布监听事件")
        this._listeningType = ListeningType.BaseCanvas;
        this.getBaseCanvas().interactive = true;
        let isInSage = false;
        this.getBaseCanvas().on("mousedown",(event:PIXI.InteractionEvent)=>{
            console.log("左键点下")
        })
        this.getBaseCanvas().on("pointerover",(event:PIXI.InteractionEvent)=>{
            console.log("进入舞台")
            isInSage = true;
        })
        this.getBaseCanvas().on("mousemove",(event:PIXI.InteractionEvent)=>{
            if(isInSage){
                console.log("移动")
            }
        })
        this.getBaseCanvas().on("pointerout",(event:PIXI.InteractionEvent)=>{
            console.log("离开舞台")
            isInSage=false;
        })
        this.getBaseCanvas().on("mouseup",(event:PIXI.InteractionEvent)=>{
            console.log("左键提起")
        })
        //滚轮事件
        this.getBaseCanvas().on("wheel",(event:PIXI.InteractionEvent)=>{
            console.log("滚轮")
        })
        this.getBaseCanvas().on("rightdown",(event:PIXI.InteractionEvent)=>{
            console.log("右键")
        })
    }

    /**
     * 初始化核心画图容器的事件监听
     */
    public initContainerListener(){
        console.log("初始化核心画图容器监听初始化")
        this._listeningType = ListeningType.Container;
        this.getContainer().interactive = true;
        let isInSage = false;
        this.getContainer().on("mousedown",(event:PIXI.InteractionEvent)=>{
            console.log("左键点下")
        })
        this.getContainer().on("pointerover",(event:PIXI.InteractionEvent)=>{
            console.log("进入舞台")
            isInSage = true;
        })
        this.getContainer().on("mousemove",(event:PIXI.InteractionEvent)=>{
            if(isInSage){
                console.log("移动")
            }
        })
        this.getContainer().on("pointerout",(event:PIXI.InteractionEvent)=>{
            console.log("离开舞台")
            isInSage=false;
        })
        this.getContainer().on("mouseup",(event:PIXI.InteractionEvent)=>{
            console.log("左键提起")
        })
        //滚轮事件
        this.getContainer().on("wheel",(event:PIXI.InteractionEvent)=>{
            console.log("滚轮")
        })
        this.getContainer().on("rightdown",(event:PIXI.InteractionEvent)=>{
            console.log("右键")
        })
    }

    /**
     * 销毁核心画图容器的事件监听
     */
    public destroyContainerListener(){
        console.log("销毁核心画图容器的事件监听")
        //设置为不可交互
        this.getContainer().interactive = false;
        //移除所有初始化的事件监听
        this.getContainer().removeAllListeners();
    }

    /**
     *  销毁基础画布矩形的事件监听
     */
    public destroyBaseCanvasListener(){
        console.log("销毁基础画布矩形的事件监听")
        //设置不可交互
        this.getBaseCanvas().interactive = false;
        //移除所有事件监听
        this.getBaseCanvas().removeAllListeners();
    }

    /**
     * 销毁画布
     */
    public destroy(isCleanWindowMount:boolean=true){
        //清空事件

        //释放pixi默认资源
        let resources = this._pixiPainter.getResourceLoader().resources;
        for(let name in resources){
            if(resources.hasOwnProperty(name)){
                let ele = resources[name];
                ele.texture.destroy(true);
            }
        }
        this._pixiPainter.destroy(true);
        //清空window挂载的资源
        if(isCleanWindowMount){
            this.destroyWindowMount();
        }
    }

    public destroyWindowMount(){
        delete window["PIXI"]
    }
}