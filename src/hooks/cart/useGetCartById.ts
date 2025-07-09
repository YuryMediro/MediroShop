import { cartService } from '@/services/cart.service'
import { useQuery } from '@tanstack/react-query'

export default function useGetCart() {
	const { data: carts, isLoading} = useQuery({
		queryKey: ['get cart item'],
		queryFn: () => cartService.getCartByUserId(),
	})

	const totalPrice = carts?.reduce(
		(sum, item) => sum + item.quantity * item.product.price,
		0
	)

	return { carts: carts || [], totalPrice, isLoading }
}
