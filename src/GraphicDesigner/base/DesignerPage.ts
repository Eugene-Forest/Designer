import {BaseItem} from "../DrawingEngine/Base/BaseItem";
import {CanvasPage} from "../DrawingEngine/Canvas/CanvasPage";
import {CustomPixiBrush} from "./CustomPixiBrush";
import {CustomSvgBrush} from "./CustomSvgBrush";

export class DesignerPage extends CanvasPage<CustomPixiBrush, CustomSvgBrush>{


    constructor(parentEle: HTMLElement, width: number, height: number, isAutoRender: boolean) {
        let pixiPainter = new CustomPixiBrush(parentEle,width,height,isAutoRender);
        let svgPainter = new CustomSvgBrush();
        super(parentEle, width, height, isAutoRender, pixiPainter, svgPainter);
    }
}