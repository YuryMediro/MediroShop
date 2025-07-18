import axios, { type CreateAxiosDefaults } from 'axios'
import { errorCatch, getContentType } from './api.helper'
import { SERVER_URL } from '@config/api.config'
import { getAccessToken, removeFromStorage } from '@/services/auth/auth-token.service'
import { authService } from '@/services/auth/auth.service'

const options: CreateAxiosDefaults = {
	baseURL: SERVER_URL,
	headers: getContentType(),
	withCredentials: true,
}

const axiosApi = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

axiosWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expried' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await authService.getNewTokens()
				return axiosWithAuth.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeFromStorage()
			}
		}

		throw error
	}
)

export { axiosApi, axiosWithAuth }