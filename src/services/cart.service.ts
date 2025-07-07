import { API_URL } from '@/config/api.config'
import type { ICartEdit, ICartItem } from '@/shared/types/cart.interface'
import { axiosWithAuth } from '@/utils/api/api.interceptor'

class CartService {
	async getCartByUserId() {
		const { data } = await axiosWithAuth<ICartItem[]>({
			url: API_URL.carts(),
			method: 'GET',
		})
		return data || []
	}

	async update(data: ICartEdit, id: string) {
		const { data: updateCart } = await axiosWithAuth<ICartItem>({
			url: API_URL.carts(`/${id}`),
			method: 'PATCH',
			data: data,
		})
		return updateCart
	}

    async delete(id: string) {
        const {data} = await axiosWithAuth<ICartItem>({
            url: API_URL.carts(`/${id}`),
            method: 'DELETE'
        })
        return {data}
    }
}

export const cartService = new CartService()
