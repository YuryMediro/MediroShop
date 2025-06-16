import StoreLayout from '@/components/Layouts/store-layout/StoreLayout'
import { StorePage } from '@/pages/StorePage/StorePage'
import { getAccessToken } from '@/services/auth/auth-token.service'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/store/$storeId')({
	beforeLoad: () => {
		const token = getAccessToken()
		if (!token) {
			throw redirect({ to: '/auth' })
		}
	},
	component: () => {
		return (
			<StoreLayout>
				<StorePage />
			</StoreLayout>
		)
	},
})
