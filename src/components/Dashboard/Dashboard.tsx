import { saveTokenStorage } from '@/services/auth/auth-token.service'
import { useSearch, type RouteComponent } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Dashboard = ({}: RouteComponent) => {
	const search = useSearch({ from: '/dashboard/' }) as { accessToken?: string }

	useEffect(() => {
		if (search.accessToken) {
			saveTokenStorage(search.accessToken)
		}
	}, [search])
	return <div>Личный кабинет</div>
}
