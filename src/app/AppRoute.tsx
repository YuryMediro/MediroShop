import StoreLayout from '@/components/Layouts/store-layout/StoreLayout'
import { AuthPage } from '@/pages/AuthPage/AuthPage'
import { HomePage } from '@/pages/HomePage/HomePage'
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
			</Route>

			<Route index element={<HomePage />} />
		</Routes>
	)
}
