import {rePainterType} from "../Helper/GraphInterfacType";

/**
 * 画笔抽象类
 */
export abstract class Brush{

    /**
     * 画笔类型
     * @returns {rePainterType}
     */
    public abstract get PainterType():rePainterType;
}