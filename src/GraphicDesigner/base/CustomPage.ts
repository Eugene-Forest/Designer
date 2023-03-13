import {BasePage} from "../DrawingEngine/Base/BasePage";
import {CustomPixiBrush} from "./CustomPixiBrush";
import {CustomSvgBrush} from "./CustomSvgBrush";
import {ClassName} from "../common/ClassEnum";
import {CustomDesign} from "./CustomDesign";

export class CustomPage extends BasePage<CustomPixiBrush, CustomSvgBrush, CustomDesign> {

    public get className(): string {
        return ClassName.DesignerPage;
    }

    constructor(parentEle: HTMLElement, width: number, height: number, isAutoRender: boolean) {
        super(parentEle);
        let pixiPainter = new CustomPixiBrush(parentEle,width,height,isAutoRender);
        let svgPainter = new CustomSvgBrush();
        let design = new CustomDesign(parentEle,width, height, isAutoRender, pixiPainter, svgPainter);
        this.initCanvas(design);
    }
}