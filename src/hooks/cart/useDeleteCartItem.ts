import { cartService } from '@/services/cart.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useDeleteCartItem = (id: string) => {
	const queryClient = useQueryClient()

	const { mutate: deleteCartItem, isPending: loadingDeleteCartItem } =
		useMutation({
			mutationKey: ['delete cart item'],
			mutationFn: () => cartService.delete(id),
			onSuccess() {
				queryClient.invalidateQueries({
					queryKey: ['get cart item'],
				})
				toast.success('Товар удален из корзины')
			},
			onError() {
				toast.error('Ошибка при удаление товара из корзины')
			},
		})
	return { deleteCartItem, loadingDeleteCartItem }
}
