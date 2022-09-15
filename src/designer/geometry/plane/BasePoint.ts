
/**
 * 平面直角坐标系下的点
 */
export class BasePoint {

    //#region 属性
    private _x: number = 0;
    private _y: number = 0;

    //#endregion 属性

    //#region 构造函数
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }
    //#endregion 构造函数

    //#region 存取器

    /**
     * Getter x
     * @return {number }
     */
	public get x(): number  {
		return this._x;
	}

    /**
     * Getter y
     * @return {number }
     */
	public get y(): number  {
		return this._y;
	}

    /**
     * Setter x
     * @param {number } value
     */
	public set x(value: number ) {
		this._x = value;
	}

    /**
     * Setter y
     * @param {number } value
     */
	public set y(value: number ) {
		this._y = value;
	}
  
    //#endregion 存取器

    //#region 函数

    //#endregion 函数

}