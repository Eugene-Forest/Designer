import { Brush } from './Brush';

/**
 * 用来定义画图基础功能
 */
export interface Painter {

	/**
	 * 画图方法
	 * @param {Brush} painter
	 */
	paint(painter: Brush): void;
}
