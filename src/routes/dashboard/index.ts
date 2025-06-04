import DashboardPage from '@/pages/DashboardPage/DashboardPage'
import { getAccessToken } from '@/services/auth/auth-token.service'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
	beforeLoad: () => {
		const token = getAccessToken()
		if (!token) {
			throw redirect({ to: '/auth' })
		}
	},
	component: DashboardPage,
})
