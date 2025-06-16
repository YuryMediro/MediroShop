import { productService } from '@/services/product.service'
import type { IProductEdit } from '@/shared/types/product.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from '@tanstack/react-router'
import toast from 'react-hot-toast'

export default function useCreateProduct() {
	const { storeId } = useParams({ from: '/store/$storeId' })
	const route = useNavigate()

	const queryClient = useQueryClient()

	const { mutate: createProduct, isPending: isLoadingProduct } = useMutation({
		mutationKey: ['create product'],
		mutationFn: (data: IProductEdit) => productService.create(data, storeId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get products for store dashboard'],
			})
			toast.success('Товар создан')
			// route({to: '/store/$storeId/products', params:{storeId: store.id}})
		},
		onError() {
			toast.error('Ошибка при создании товара')
		},
	})
	return { createProduct, isLoadingProduct }
}
