import StoreLayout from '@/components/Layouts/store-layout/StoreLayout'
import { AuthPage } from '@/pages/AuthPage/AuthPage'
import { HomePage } from '@/pages/HomePage/HomePage'
import { CategoriesEditPage } from '@/pages/StorePage/CategoriesPage/CategoriesEditPage/CategoriesEditPage'
import { CategoriesPage } from '@/pages/StorePage/CategoriesPage/CategoriesPage'
import { CreateCategoriesPage } from '@/pages/StorePage/CategoriesPage/CreateCategoriesPage/CreateCategoriesPage'
import { ColorEditPage } from '@/pages/StorePage/ColorsPage/ColorEditPage/ColorEditPage'
import { ColorPage } from '@/pages/StorePage/ColorsPage/ColorsPage'
import { CreateColorsPage } from '@/pages/StorePage/ColorsPage/CreateColorPage/CreateColorPage'
import { CreateProductsPage } from '@/pages/StorePage/ProductsPage/CreateProductsPage/CreateProductsPage'
import { ProductEditPage } from '@/pages/StorePage/ProductsPage/ProductEditPage/ProductEditPage'
import { ProductsPage } from '@/pages/StorePage/ProductsPage/ProductsPage'
import { SettingsPage } from '@/pages/StorePage/SettingsPage/SettingsPage'
import { StorePage } from '@/pages/StorePage/StorePage'
import { getAccessToken } from '@/services/auth/auth-token.service'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

const AuthRoute = () => {
	const token = getAccessToken()
	if (token) {
		return <Navigate to='/dashboard' replace />
	}

	return <Outlet />
}

const GuestRoute = () => {
	const token = getAccessToken()
	if (!token) {
		return <Navigate to='/auth' replace />
	}

	return <Outlet />
}

export const AppRoute = () => {
	return (
		<Routes>
			{/* Публичные маршруты доступные гостям */}
			<Route element={<AuthRoute />}>
				<Route path='/auth' element={<AuthPage />} />
			</Route>
			{/* Приватные маршруты доступные только авторизованным */}
			<Route element={<GuestRoute />}>
				<Route
					path='/store/:storeId'
					element={
						<StoreLayout>
							<StorePage />
						</StoreLayout>
					}
				/>
				<Route
					path='/store/:storeId/settings'
					element={
						<StoreLayout>
							<SettingsPage />
						</StoreLayout>
					}
				/>
				<Route
					path='/store/:storeId/products'
					element={
						<StoreLayout>
							<ProductsPage />
						</StoreLayout>
					}
				/>
				<Route
					path='/store/:storeId/products/create'
					element={
						<StoreLayout>
							<CreateProductsPage />
						</StoreLayout>
					}
				/>
				<Route
					path='/store/:storeId/products/:productId'
					element={
						<StoreLayout>
							<ProductEditPage />
						</StoreLayout>
					}
				/>
				<Route
					path='/store/:storeId/colors'
					element={
						<StoreLayout>
							<ColorPage />
						</StoreLayout>
					}
				/>
				<Route
					path='/store/:storeId/colors/create'
					element={
						<StoreLayout>
							<CreateColorsPage />
						</StoreLayout>
					}
				/>
				<Route
					path='/store/:storeId/colors/:colorId'
					element={
						<StoreLayout>
							<ColorEditPage />
						</StoreLayout>
					}
				/>
				<Route
					path='/store/:storeId/categories'
					element={
						<StoreLayout>
							<CategoriesPage />
						</StoreLayout>
					}
				/>
				<Route
					path='/store/:storeId/categories/create'
					element={
						<StoreLayout>
							<CreateCategoriesPage />
						</StoreLayout>
					}
				/>
				<Route
					path='/store/:storeId/categories/:categoryId'
					element={
						<StoreLayout>
							<CategoriesEditPage />
						</StoreLayout>
					}
				/>
			</Route>

			<Route index element={<HomePage />} />
		</Routes>
	)
}
