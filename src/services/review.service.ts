import { API_URL } from '@config/api.config'
import type { IReview, IReviewInput } from '@shared/types/review.interface'
import { axiosWithAuth } from '@utils/api/api.interceptor'

class ReviewService {
	async getByStoreId(id: string) {
		const { data } = await axiosWithAuth<IReview[]>({
			url: API_URL.reviews(`/by-storeId/${id}`),
			method: 'GET',
		})
		return data
	}

	async create(data: IReviewInput, productId: string, storeId: string) {
		const { data: createdReview } = await axiosWithAuth<IReview>({
			url: API_URL.reviews(`/${productId}/${storeId}`),
			method: 'POST',
			data,
		})
		return createdReview
	}

	async delete(id: string) {
		const { data: deletedReview } = await axiosWithAuth<IReview>({
			url: API_URL.reviews(`/${id}`),
			method: 'DELETE',
		})
		return deletedReview
	}
}

export const reviewService = new ReviewService()
