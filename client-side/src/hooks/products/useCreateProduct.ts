import { productService } from '@/services/product.service'
import type { IProductEdit } from '@/shared/types/product.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function useCreateProduct(storeId: string) {
	const route = useNavigate()

	const queryClient = useQueryClient()

	const { mutate: createProduct, isPending: isLoadingCreate } = useMutation({
		mutationKey: ['create product'],
		mutationFn: (data: IProductEdit) => productService.create(data, storeId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get products for store dashboard'],
			})
			toast.success('Товар создан')
			route(`/store/${storeId}/products`)
		},
		onError() {
			toast.error('Ошибка при создании товара')
		},
	})
	return { createProduct, isLoadingCreate }
}
