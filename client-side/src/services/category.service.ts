import { API_URL } from '@config/api.config'
import type { ICategory, ICategoryEdit } from '@shared/types/category.interface'
import { axiosApi, axiosWithAuth } from '@utils/api/api.interceptor'

class CategoryService {
	async getByStoreId(id: string) {
		const { data } = await axiosWithAuth<ICategory[]>({
			url: API_URL.categories(`/by-storeId/${id}`),
			method: 'GET',
		})
		return data
	}

	async getById(id: string) {
		const { data } = await axiosApi<ICategory>({
			url: API_URL.categories(`/by-id/${id}`),
			method: 'GET',
		})
		return data
	}

	async create(data: ICategoryEdit, storeId: string) {
		const { data: createdCategory } = await axiosWithAuth<ICategory>({
			url: API_URL.categories(`/${storeId}`),
			method: 'POST',
			data,
		})
		return createdCategory
	}

	async update(data: ICategoryEdit, id: string) {
		const { data: updatedCategory } = await axiosWithAuth<ICategory>({
			url: API_URL.categories(`/${id}`),
			method: 'PUT',
			data,
		})
		return updatedCategory
	}

	async delete(id: string) {
		const { data: deletedCategory } = await axiosWithAuth<ICategory>({
			url: API_URL.categories(`/${id}`),
			method: 'DELETE',
		})
		return deletedCategory
	}
}

export const categoryService = new CategoryService()
