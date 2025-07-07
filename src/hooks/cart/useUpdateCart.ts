import { cartService } from '@/services/cart.service'
import type { ICartEdit } from '@/shared/types/cart.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useUpdateCart = (id: string) => {
	const queryClient = useQueryClient()

	const { mutate: updateCart, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update cart'],
		mutationFn: (data: ICartEdit) => cartService.update(data, id),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get cart item'],
			})
			toast.success('Количество обновлено')
		},
		onError() {
			toast.error('Ошибка при обновление корзины')
		},
	})

	return { updateCart, isLoadingUpdate }
}
