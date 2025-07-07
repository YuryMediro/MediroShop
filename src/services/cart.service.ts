import { API_URL } from '@/config/api.config'
import type { ICartItem } from '@/shared/types/cart.interface'
import { axiosWithAuth } from '@/utils/api/api.interceptor'

class CartService {
	async getCartByUserId() {
		const { data } = await axiosWithAuth<ICartItem[]>({
			url: API_URL.carts(),
			method: 'GET',
		})
		return data || []
	}
}

export const cartService = new CartService()
