import { productService } from '@/services/product.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from '@tanstack/react-router'
import toast from 'react-hot-toast'

export default function useDeleteProduct() {
	const route = useNavigate()
	const { storeId } = useParams({ from: '/store/$storeId' })

	const queryClient = useQueryClient()

	const {mutate: deleteProduct, isPending: isLoadingProduct} = useMutation({
		mutationKey: ['delete product'],
		// mutationFn: () => productService.delete(productId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get products for store dashboard'],
			})
			toast.success('Товар удален')
			// route({to: '/store/$storeId/products', params:{storeId: store.id}})
		},
		onError() {
			toast.error('Ошибка при удаление товара')
		},
	})

    return {deleteProduct, isLoadingProduct}
}
