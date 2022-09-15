import { Painter } from '../canvas/Painter';
/**
 * 用来体现图形包含关系的类
 */
export class BaseItem implements Painter{

    //#region 属性
    
    /**
     * 包含的子对象
     */
    private _childItems:BaseItem[]=[];
    /**
     * 被包含于的父对象
     */
    private _parentItem:BaseItem;

    //#endregion 属性


    //#region 构造函数
    constructor();
    constructor(childItems: BaseItem[], parentItem: BaseItem) ;
    constructor(childItems?: BaseItem[], parentItem?: BaseItem) {
        this._childItems = childItems||null;
        this._parentItem = parentItem||null;
    }    
    //#endregion 构造函数

    //#region 存取器
    
    get childItems(): BaseItem[] {
        return this._childItems;
    }

    set childItems(value: BaseItem[]) {
        this._childItems = value;
    }

    get parentItem(): BaseItem {
        return this._parentItem;
    }

    set parentItem(value: BaseItem) {
        this._parentItem = value;
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