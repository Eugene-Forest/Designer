import {Brush} from "./Brush";
import {rePainterType} from "../Helper/GraphInterfacType";

/**
 * 封装 svg.js 画笔
 */
export class SvgBrush extends Brush{
    public get PainterType(): rePainterType {
        return rePainterType.Svg;
    }

}