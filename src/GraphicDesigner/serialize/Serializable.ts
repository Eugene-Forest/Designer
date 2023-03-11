/**
 * 序列化接口
 */
export interface Serializable {
	Serialize(): void;

	DeSerialize(): void;

	DeSerializeRef(): void;
}
