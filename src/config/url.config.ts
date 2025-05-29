export const APP_URL = import.meta.env.VITE_APP_URL as string

export const PUBLIC_URL = {
	//маршруты доступные всем
	root: (url = '') => `${url ? url : ''}`,

	home: () => PUBLIC_URL.root('/'),
	auth: () => PUBLIC_URL.root('/auth'),

	explorer: (query = '') => PUBLIC_URL.root(`/explorer${query}`),

	products: (id = '') => PUBLIC_URL.root(`/products${id}`),
	categories: (id = '') => PUBLIC_URL.root(`/categories${id}`),
}
export const DASHBOARD_URL = {
	//url для юзера
	root: (url = '') => `/dashboard${url ? url : ''}`,

	home: () => DASHBOARD_URL.root('/'),
	favorites: () => DASHBOARD_URL.root('/favorites'),
}
export const STORE_URL = {
	//url для работы с магазином
	root: (url = '') => `/store${url ? url : ''}`,

	home: (storeId = '') => STORE_URL.root(`/${storeId}`),

	products: (storeId = '') => STORE_URL.root(`/${storeId}/products`),
	productCreate: (storeId = '') =>
		STORE_URL.root(`/${storeId}/products/create`),
	productEdit: (storeId = '', id = '') =>
		STORE_URL.root(`/${storeId}/products/${id}`),

	categories: (storeId = '') => STORE_URL.root(`/${storeId}/categories`),
	categoryCreate: (storeId = '') =>
		STORE_URL.root(`/${storeId}/categories/create`),
	categoryEdit: (storeId = '', id = '') =>
		STORE_URL.root(`/${storeId}/categories/${id}`),

	colors: (storeId = '') => STORE_URL.root(`/${storeId}/colors`),
	colorCreate: (storeId = '') => STORE_URL.root(`/${storeId}/colors/create`),
	colorEdit: (storeId = '', id = '') =>
		STORE_URL.root(`/${storeId}/colors/${id}`),

	reviews: (storeId = '') => STORE_URL.root(`/${storeId}/reviews`),

	settings: (storeId = '') => STORE_URL.root(`/${storeId}/settings`),
}
