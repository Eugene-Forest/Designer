import {BaseDesign} from "../DrawingEngine/Base/BaseDesign";
import {CustomPixiBrush} from "./CustomPixiBrush";
import {CustomSvgBrush} from "./CustomSvgBrush";
import {EventBo} from "../DrawingEngine/BO/EventBo";


export class CustomDesign extends BaseDesign<CustomPixiBrush, CustomSvgBrush> {


    constructor(parentEle: HTMLElement, width: number, height: number, isAutoRender: boolean, pixiPainter: CustomPixiBrush, svgPainter: CustomSvgBrush, eventBo?: EventBo) {
        super(parentEle, width, height, isAutoRender, pixiPainter, svgPainter, eventBo);
    }



}