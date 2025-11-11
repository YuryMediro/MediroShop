export interface IColor {
	id: string
	name: string
	createdAt: string
	value: string
	storeId: string
}

export interface IColorEdit extends Pick<IColor, "value" | "name"> {}