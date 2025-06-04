import { AuthPage } from '@/pages/AuthPage/AuthPage'
import { getAccessToken } from '@/services/auth/auth-token.service'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/')({
	beforeLoad: () => {
		const token = getAccessToken()
		if (token) {
			throw redirect({ to: '/dashboard' })
		}
	},
	component: AuthPage,
})
