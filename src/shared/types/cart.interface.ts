import type { IProduct } from './product.interface'

export interface ICartItem {
	id: string
	product: IProduct
	quantity: number
	price: number
	userId: string
	productId: string
	createdAt: string
	updatedAt: string
}

export interface ICartEdit
	extends Pick<ICartItem, 'quantity'>{}
