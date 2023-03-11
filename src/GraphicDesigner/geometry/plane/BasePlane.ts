import { BaseLine } from './BaseLine';
/**
 * 多边形平面，默认认为所有的边线相互之间都没有交点。
 */
export class BasePlane {

    //#region 属性

    //边线集合，是否可以组成一个有效的平面有待商议
    private _lines: BaseLine[];

    private _lineSize: number;
    //#endregion 属性

    //#region 构造函数

    //#endregion 构造函数

    //#region 存取器

    /**
     * Getter lines
     * @return {BaseLine[]}
     */
	public get lines(): BaseLine[] {
		return this._lines;
	}

    /**
     * Setter lines
     * @param {BaseLine[]} value
     */
	public set lines(value: BaseLine[]) {
		this._lines = value;
	}
    
    //#endregion 存取器

    //#region 函数

    //#endregion 函数

}