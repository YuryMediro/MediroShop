import { API_URL } from '@config/api.config'
import type { EnumOrderStatus, IPaymentResponse } from '@shared/types/order.interface'
import { axiosWithAuth } from '@utils/api/api.interceptor'

type TypeData = {
	status?: EnumOrderStatus
	items: {
		quantity: number
		price: number
		productId: string
		storeId: string
	}[]
}

class OrderService {
	async place(data: TypeData) {
		return axiosWithAuth<IPaymentResponse>({
			url: API_URL.orders('/place'),
			method: 'POST',
			data,
		})
	}
}

export const orderService = new OrderService()