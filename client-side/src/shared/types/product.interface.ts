import type { ICategory } from './category.interface'
import type { IColor } from './color.interface'
import type { IReview } from './review.interface'

export interface IProduct {
	id: string
	title: string
	description: string
	price: number
	images: string[]
	category: ICategory
	reviews: IReview[]
	color: IColor
	storeId: string
}

export interface IProductEdit
	extends Omit<IProduct, 'id' | 'reviews' | 'storeId' | 'category' | 'color'> {
	categoryId: string
	colorId: string
}
