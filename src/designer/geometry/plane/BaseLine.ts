import { BasePoint } from './BasePoint';
import { Painter } from '../../DrawingEngine/Canvas/Painter';

/**
 * 平面直角坐标系下的线
 */
export class BaseLine implements Painter{

    //#region 属性

    private _startPoint: BasePoint;
    private _endPoint: BasePoint;

    //#endregion 属性

    //#region 构造函数
    

    //#endregion 构造函数

    //#region 存取器


    /**
     * Getter startPoint
     * @return {BasePoint}
     */
	public get startPoint(): BasePoint {
        return this._startPoint;
	}

    /**
     * Getter endPoint
     * @return {BasePoint}
     */
	public get endPoint(): BasePoint {
		return this._endPoint;
	}

    /**
     * Setter startPoint
     * @param {BasePoint} value
     */
	public set startPoint(value: BasePoint) {
		this._startPoint = value;
	}

    /**
     * Setter endPoint
     * @param {BasePoint} value
     */
	public set endPoint(value: BasePoint) {
		this._endPoint = value;
	}
 

    //#endregion 存取器

    //#region 函数


    //#region 函数实现与重写

    paint(arg: any): void {
        throw new Error('Method not implemented.');
    }
    //#endregion 函数实现与重写
    
    //#endregion 函数

}