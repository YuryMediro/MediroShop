import { useMutation, type UseMutationResult } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { productService } from '@/services/product.service'
import { categoryService } from '@/services/category.service'
import { colorService } from '@/services/color.service'
import { storeService } from '@/services/store.service'
import { useNavigate } from 'react-router-dom'
import { cartService } from '@/services/cart.service'

export const useDeleteStore = (
	storeId: string
): UseMutationResult<void, Error, void> => {
	const route = useNavigate()
	return useMutation({
		mutationFn: async () => {
			const [products, categories, colors] = await Promise.all([
				productService.getByStoreId(storeId),
				categoryService.getByStoreId(storeId),
				colorService.getByStoreId(storeId),
			])

			await Promise.all(
				products.map(async product => {
					await cartService.deleteCartItemByProductId(product.id)
				})
			)
			//Promise.all позволяет запустить несколько асинхронных операций одновременно и дождаться их завершения.

			await Promise.all(
				products.map(product => productService.delete(product.id))
			)

			await Promise.all(
				categories.map(category => categoryService.delete(category.id))
			)

			await Promise.all(colors.map(color => colorService.delete(color.id)))

			await storeService.delete(storeId)
		},
		onSuccess: () => {
			toast.success('Магазин и связанные данные успешно удалены')
			route('/')
		},
		onError: error => {
			toast.error('Ошибка при удалении магазина или связанных данных')
			console.error(error)
		},
	})
}
