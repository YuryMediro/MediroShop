import { API_URL } from "@config/api.config"
import type { IFile } from "@shared/types/file.interface"
import { axiosWithAuth } from "@utils/api/api.interceptor"

class FileService {
	async upload(file: FormData, folder?: string) {
		const { data } = await axiosWithAuth<IFile[]>({
			url: API_URL.files(),
			method: 'POST',
			data: file,
			params: {
				folder,
			},
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})

		return data
	}
}

export const fileService = new FileService()
