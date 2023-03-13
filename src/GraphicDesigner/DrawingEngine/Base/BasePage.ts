import {BaseDesign} from "./BaseDesign";
import {PixiBrush} from "../Canvas/PixiBrush";
import {SvgBrush} from "../Canvas/SvgBrush";
import {BaseItem} from "./BaseItem";
import {BaseClassName} from "../Helper/GraphInterfacType";

/**
 * 画图引擎的基础画布
 */
export class BasePage<PixiArgs extends PixiBrush, SvgArgs extends SvgBrush,Design extends BaseDesign<PixiArgs, SvgArgs>>
    extends BaseItem{

    private _design: Design;
    /** 父级挂载元素 */
    private _parentEle: HTMLElement;

    public get design(): Design {
        return this._design;
    }

    public get className(): string {
        return BaseClassName.BasePage;
    }

    public set design(value: Design) {
        this._design = value;
    }

    public get parentEle(): HTMLElement {
        return this._parentEle;
    }

    constructor(parentEle: HTMLElement) {
        super();
        // this._design = new BaseDesign(parentEle,width,height,isAutoRender,pixiPainter,svgPainter,eventBo);
        this._parentEle = parentEle;
    }

    public initCanvas(design:Design){
        this._design=design;
    }
}