import {Serializable} from "./Serializable";


/**
 * 序列化对象
 */
export class SerializedObject {
    private _serializedItem: Serializable = null;
    private _name: string;
    private _className: string;
    private _propertyItems: Map<string, object> = new Map();


    public get serializedItem(): Serializable {
        return this._serializedItem;
    }

    public set serializedItem(value: Serializable) {
        this._serializedItem = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get className(): string {
        return this._className;
    }

    public set className(value: string) {
        this._className = value;
    }

    public get propertyItems(): Map<string, object> {
        return this._propertyItems;
    }

    public set propertyItems(value: Map<string, object>) {
        this._propertyItems = value;
    }

    /**
     * 判断序列化对象中是否存在此属性
     * @param {string} name
     * @returns {boolean}
     */
    public hasProperty(name: string) {
        return this._propertyItems.has(name);
    }

    public addString(name: string, value: string) {
        this._propertyItems.set(name, new String(value));
    }

    public readString(name: string): string {
        if (this.hasProperty(name)) {
            return this._propertyItems.get(name).toString();
        } else {
            return "";
        }
    }

    public addNumber(name: string, value: number) {
        this._propertyItems.set(name, new Number(value));
    }

    public readNumber(name: string): number {
        if (this.hasProperty(name)) {
            let value = this._propertyItems.get(name);
            let parseValue = Number(value);
            if (!isNaN(parseValue)) {
                return parseValue;
            }
        } else {
            return 0;
        }
    }

    public AddBoolean(name: string, value: boolean) {
        this._propertyItems.set(name, new Boolean(value));
    }

    public readBoolean(name: string) {
        if (this.hasProperty(name)) {
            let value = this._propertyItems.get(name).toString();
            if (value == 'true') {
                return true;
            } else if (value == "false") {
                return false;
            }
        }
        return undefined;
    }

    public addRefItem(name: string, value: SerializedObject) {
        this._propertyItems.set(name, value);
    }

    public readRefItem(name: string): SerializedObject {
        if (this.hasProperty(name)) {
            return this._propertyItems.get(name) as SerializedObject;
        } else {
            return null;
        }
    }

    public addRefItems(name: string, value: SerializedObject[]) {
        this._propertyItems.set(name, value);
    }

    public readRefItems(name: string): SerializedObject[] {
        if (this.hasProperty(name)) {
            return this._propertyItems.get(name) as SerializedObject[];
        } else {
            return [];
        }
    }
}