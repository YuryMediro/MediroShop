import { API_URL } from '@config/api.config'
import type { IUser } from '@shared/types/user.interface'
import { axiosWithAuth } from '@utils/api/api.interceptor'

class UserService {
	async getProfile() {
		const { data } = await axiosWithAuth<IUser>({
			url: API_URL.users(`/profile`),
			method: 'GET',
		})
		return data
	}

	async toggleFavorite(productId: string) {
		return axiosWithAuth<IUser>({
			url: API_URL.users(`/profile/favorites/${productId}`),
			method: 'PATCH',
		})
	}
}

export const userService = new UserService()
