import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { saveTokenStorage } from '@/services/auth/auth-token.service'
import { useLogout } from '@/hooks/useLogout'
import s from './Dashboard.module.scss'
import { Button } from '../ui/Button'
import { LogOut } from 'lucide-react'
import { DataTable } from '../ui/DataTable/DataTable'
export const Dashboard = () => {
	const location = useLocation()

	const { logout } = useLogout()

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search)
		const accessToken = searchParams.get('accessToken')

		if (accessToken) {
			saveTokenStorage(accessToken)

			const newUrl = `${location.pathname}`
			window.history.replaceState(null, '', newUrl)
		}
	}, [location.search])

	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<h1>Ваши заказы</h1>
				<Button variant='primary' onClick={() => logout()}>
					<LogOut />
					Выйти из аккаунта
				</Button>
			</div>
			<DataTable columns={[]} data={[]}/>
		</div>
	)
}
