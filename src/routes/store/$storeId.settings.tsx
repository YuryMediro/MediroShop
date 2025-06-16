import StoreLayout from '@/components/Layouts/store-layout/StoreLayout'
import { SettingsPage } from '@/pages/StorePage/SettingsPage/SettingsPage'
import { getAccessToken } from '@/services/auth/auth-token.service'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/store/$storeId/settings')({
	beforeLoad: () => {
		const token = getAccessToken()
		if (!token) {
			throw redirect({ to: '/auth' })
		}
	},
	component: () => {
		return (
			<StoreLayout>
				<SettingsPage />
			</StoreLayout>
		)
	},
})


