import { cartService } from '@/services/cart.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useAddToCart = () => {
	const queryClient = useQueryClient()

	const { mutate: addToCart, isPending: loadingAddToCart } = useMutation({
		mutationKey: ['add to cart'],
		mutationFn: ({
			productId,
			
		}: {
			productId: string
			
		}) => cartService.addToCart(productId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get cart item'],
			})
			toast.success('Товар добавлен в корзину')
		},
		onError() {
			toast.error('Ошибка при добавление товара в корзину')
		},
	})
	return { addToCart, loadingAddToCart }
}
