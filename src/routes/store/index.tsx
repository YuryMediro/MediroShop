import { StorePage } from '@/pages/StorePage/StorePage'
import { getAccessToken } from '@/services/auth/auth-token.service'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/store/')({
	beforeLoad: () => {
		const token = getAccessToken()
		if (!token) {
			throw redirect({ to: '/auth' })
		}
	},
	
	component: StorePage,
})
