import { Brush } from '../DrawingEngine/Canvas/Brush';
import { Painter } from '../DrawingEngine/Canvas/Painter';
import { ClassName } from '../common/ClassEnum';
import { Serializable } from '../serialize/Serializable';
/**
 * 用来体现图形包含关系的类
 */
export class BaseItem implements Painter,Serializable{

    //#region 属性

    /** 包含的子对象 */
    private _childItems: BaseItem[] = [];

    /** 被包含于的父对象 */
    private _parentItem: BaseItem;
    /**
     * 唯一标识的名字
     */
    private _name: string = '';
    /**
     * 类名
     */
    private readonly _className: string = ClassName.BaseItem;
    /**
     * 用来表示当前对象当前状态的标识符；用来识别当前对象是否改变
     */
    private _id: string = '';
    /**
     * 用来判断是否需要重新画图的标识符
     */
    private _isDrawChange: boolean = true;

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

    /**
     * 获取子对象集合
     */
    get getChildItems(): BaseItem[] {
        return this._childItems;
    }

    /**
     * 设置子对象集合
     */
    set setChildItems(value: BaseItem[]) {
        this._childItems = value;
    }

    get getParentItem(): BaseItem {
        return this._parentItem;
    }

    set setParentItem(value: BaseItem) {
        this._parentItem = value;
    }

    get getId() {
        return this._id;
    }

    get getDrawChange() {
        return this._isDrawChange;
    }

    set setDrawChange(flag: boolean) {
        this._isDrawChange = flag;
    }

    get getName() {
        return this._name;
    }
    
    get getClassName() {
        return this._className;
    }
    //#endregion 存取器


    //#region 函数
    
    
    //#region 函数实现与重写
    
    paint(painter: Brush): void {
        throw new Error('Method not implemented.');
    }

    Serialize(): void {
        throw new Error('Method not implemented.');
    }
    DeSerialize(): void {
        throw new Error('Method not implemented.');
    }
    DeSerializeRef(): void {
        throw new Error('Method not implemented.');
    }
    //#endregion 函数实现与重写

    //#endregion 函数

}