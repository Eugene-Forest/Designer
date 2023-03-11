import {CanvasDesign} from "./CanvasDesign";
import {EventBo} from "../BO/EventBo";
import {PixiBrush} from "./PixiBrush";
import {SvgBrush} from "./SvgBrush";

/**
 * 画图引擎的基础画布
 */
export class CanvasPage<PixiArgs extends PixiBrush, SvgArgs extends SvgBrush>{

    private _design: CanvasDesign<PixiArgs,SvgArgs>;
    /** 父级挂载元素 */
    private _parentEle: HTMLElement;

    public get design(): CanvasDesign<PixiArgs,SvgArgs> {
        return this._design;
    }

    public set design(value: CanvasDesign<PixiArgs,SvgArgs>) {
        this._design = value;
    }

    public get parentEle(): HTMLElement {
        return this._parentEle;
    }

    constructor(parentEle: HTMLElement, width?: number, height?: number, isAutoRender?: boolean,pixiPainter?: PixiArgs, svgPainter?: SvgArgs, eventBo?: EventBo) {
        this._design = new CanvasDesign(parentEle,width,height,isAutoRender,pixiPainter,svgPainter,eventBo);
        this._parentEle = parentEle;
    }
}