import { orderService } from '@/services/order.service'
import { useMutation } from '@tanstack/react-query'
import useGetCart from '../cart/useGetCartById'
import toast from 'react-hot-toast'

export const useCreatePayment = () => {
	const { carts } = useGetCart()

	const { mutate: createPayment, isPending: isLoadingPayment } = useMutation({
		mutationKey: ['create order'],
		mutationFn: () =>
			orderService.place({
				items: carts.map(cart => ({
					price: cart.price,
					quantity: cart.quantity,
					productId: cart.product.id,
					storeId: cart.product.storeId,
				})),
			}),
		onSuccess({ data }) {
			window.location.href = data.confirmation.confirmation_url
		},
		onError() {
			toast.error('Ошибка при создание платежа')
		},
	})
	return { createPayment, isLoadingPayment }
}
