import { cartService } from '@/services/cart.service'
import { useQuery } from '@tanstack/react-query'

export default function useGetCart() {
	const { data: carts } = useQuery({
		queryKey: ['get cart item'],
		queryFn: () => cartService.getCartByUserId(),
	})

	return { carts: carts || [] }
}
