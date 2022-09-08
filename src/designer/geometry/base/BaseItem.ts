/**
 * 用来体现图形包含关系的类
 */
export class BaseItem{

    //包含的子对象
    private _childItems:BaseItem[]=[];

    //被包含于的父对象
    private _parentItem:BaseItem;


    constructor();
    constructor(childItems: BaseItem[], parentItem: BaseItem) ;
    constructor(childItems?: BaseItem[], parentItem?: BaseItem) {
        this._childItems = childItems;
        this._parentItem = parentItem;
    }


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
}