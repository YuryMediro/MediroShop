export interface ICategory {
	id: string
	createdAt: string
	title: string
	description: string
	storeId: string
}

export interface ICategoryEdit extends Pick<ICategory, "title" | "description"> {}