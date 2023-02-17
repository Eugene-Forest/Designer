import { Brush } from "./Brush";

/**
 * 用来定义画图基础功能
 */
export interface Painter {

    paint(painter: Brush): void;
}