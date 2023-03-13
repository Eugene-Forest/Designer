import { Shape } from "@svgdotjs/svg.js";
import { DisplayObject } from "pixi.js";

/**
 * 画图得到的图形的基本元素
 */
export type GraphicBaseElement = Shape | DisplayObject;

/**
 * 画笔类型
 */
export enum rePainterType {
    Pixi = "PIXI",
    Svg = "SVG"
}

export enum BaseClassName{

    BaseItem = "BaseItem",
    BasePage = "BasePage",

}