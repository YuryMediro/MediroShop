import { productService } from '@/services/product.service'
import type { IProductEdit } from '@/shared/types/product.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'
import toast from 'react-hot-toast'

export default function useUpdateProduct() {
	// const { productId } = useParams({})

	const queryClient = useQueryClient()

	const { mutate: updateProduct, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update product'],
		// mutationFn: (data: IProductEdit) => productService.update(data, productId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get products for store dashboard'],
			})
			toast.success('Товар обновлен')
		},
		onError() {
			toast.error('Ошибка при обновление товара')
		},
	})

	return { updateProduct, isLoadingUpdate }
}
