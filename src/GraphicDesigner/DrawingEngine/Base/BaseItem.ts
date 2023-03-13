import {Brush} from '../Canvas/Brush';
import {Painter} from '../Canvas/Painter';
import {Serializable} from '../../serialize/Serializable';
import {BaseClassName} from "../Helper/GraphInterfacType";

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
    private readonly _className: string = BaseClassName.BaseItem;
    /**
     * 用来表示当前对象当前状态的标识符；用来识别当前对象是否改变
     */
    private _uuid : number = 0;
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

    public get uuid(): number {
        return this._uuid;
    }

    public get className(): string {
        return this._className;
    }

    public get childItems(): BaseItem[] {
        return this._childItems;
    }

    public set childItems(value: BaseItem[]) {
        this._childItems = value;
    }

    public get parentItem(): BaseItem {
        return this._parentItem;
    }

    public set parentItem(value: BaseItem) {
        this._parentItem = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get isDrawChange(): boolean {
        return this._isDrawChange;
    }

    public set isDrawChange(value: boolean) {
        this._isDrawChange = value;
    }

    //#endregion 存取器


    //#region 函数

    public updateUUID(){
        this._uuid++;
    }
    
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