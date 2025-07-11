import type { IProduct } from '@/shared/types/product.interface'

export const averageRating = (product: IProduct): string => {
	return product.reviews.length > 0
		? (
				product.reviews.reduce((acc, item) => acc + item.rating, 0) /
				product.reviews.length
			).toFixed(1)
		: '0.0'
}
