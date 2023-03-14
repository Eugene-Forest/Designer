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

export enum deColor{
    white = 0xffffff,
}


export enum ListeningType{
    BaseCanvas = 0,
    Container = 1,
}

// type InteractionPointerEvents = "pointerdown" | "pointercancel" | "pointerup" | "pointertap" | "pointerupoutside" | "pointermove" | "pointerover" | "pointerout";
// type InteractionTouchEvents = "touchstart" | "touchcancel" | "touchend" | "touchendoutside" | "touchmove" | "tap";
// type InteractionMouseEvents = "rightdown" | "mousedown" | "rightup" | "mouseup" | "rightclick" | "click" | "rightupoutside" | "mouseupoutside" | "mousemove" | "mouseover" | "mouseout";
// type InteractionPixiEvents = "added" | "removed";
// type InteractionEventTypes = InteractionPointerEvents | InteractionTouchEvents | InteractionMouseEvents | InteractionPixiEvents;
