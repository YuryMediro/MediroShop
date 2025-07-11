import { cartService } from '@/services/cart.service'
import { productService } from '@/services/product.service'
import { useMutation, type UseMutationResult } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const useDeleteProduct = (
	storeId: string,
	productId: string
): UseMutationResult<void, Error, void> => {
	const route = useNavigate()
	return useMutation({
		mutationFn: async () => {
			const [products] = await Promise.all([
				productService.getByStoreId(storeId),
			])

			await Promise.all(
				products.map(async product => {
					await cartService.deleteCartItemByProductId(product.id)
				})
			)
			await productService.delete(productId)
		},

		onSuccess: () => {
			toast.success('Товар успешно удален')
			route(`/store/${storeId}/products`)
		},
		onError: error => {
			toast.error('Ошибка при удалении товара')
			console.error(error)
		},
	})
}
