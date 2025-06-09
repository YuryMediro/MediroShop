import { Store } from '@/components/StoreId/Store'
import { getAccessToken } from '@/services/auth/auth-token.service'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/store/$storeId')({
	beforeLoad: () => {
		const token = getAccessToken()
		if (!token) {
			throw redirect({ to: '/auth' })
		}
	},
	component: Store,
})
