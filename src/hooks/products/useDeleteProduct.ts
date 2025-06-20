import { productService } from '@/services/product.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function useDeleteProduct(productId: string, storeId: string) {
	const route = useNavigate()

	const queryClient = useQueryClient()

	const { mutate: deleteProduct, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete product'],
		mutationFn: () => productService.delete(productId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get products for store dashboard'],
			})
			toast.success('Товар удален')
			route(`/store/${storeId}/products`)
		},
		onError() {
			toast.error('Ошибка при удаление товара')
		},
	})

	return { deleteProduct, isLoadingDelete }
}
