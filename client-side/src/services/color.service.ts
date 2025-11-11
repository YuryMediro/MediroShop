import { API_URL } from '@config/api.config'
import type { IColor, IColorEdit } from '@shared/types/color.interface'
import { axiosWithAuth } from '@utils/api/api.interceptor'

class ColorService {
	async getByStoreId(id: string) {
		const { data } = await axiosWithAuth<IColor[]>({
			url: API_URL.colors(`/by-storeId/${id}`),
			method: 'GET',
		})
		return data || []
	}

	async getById(id: string) {
		const { data } = await axiosWithAuth<IColor>({
			url: API_URL.colors(`/by-id/${id}`),
			method: 'GET',
		})
		return data
	}

	async create(data: IColorEdit, storeId: string) {
		const { data: createdColor } = await axiosWithAuth<IColor>({
			url: API_URL.colors(`/${storeId}`),
			method: 'POST',
			data,
		})
		return createdColor
	}

    async update(data: IColorEdit, id: string) {
        const {data: updatedColor} = await axiosWithAuth<IColor>({
            url: API_URL.colors(`/${id}`),
            method: 'PUT',
            data
        })
        return updatedColor
    }

    async delete(id:string){
        const {data: deletedColor} = await axiosWithAuth<IColor>({
            url: API_URL.colors(`/${id}`),
            method: 'DELETE'
        })
        return deletedColor
    } 
}

export const colorService = new ColorService()
