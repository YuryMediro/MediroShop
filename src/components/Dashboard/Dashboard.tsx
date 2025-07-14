import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { saveTokenStorage } from '@/services/auth/auth-token.service'
import { useLogout } from '@/hooks/useLogout'
import s from './Dashboard.module.scss'
import { Button } from '@components/ui/Button'
import { LogOut } from 'lucide-react'
import { DataTable } from '../ui/DataTable/DataTable'
import { orderColumns, type IOrderColumns } from './OrderColumns'
import { useProfile } from '@/hooks/useProfile'
import { EnumOrderStatus } from '@/shared/types/order.interface'
import { formatDate } from '@/utils/date/form-date'
export const Dashboard = () => {
	const location = useLocation()

	const { user } = useProfile()

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

	const formattedOrders: IOrderColumns[] = user
		? user.orders.map(order => ({
				createdAt: formatDate(order.createdAt),
				status:
					order.status === EnumOrderStatus.PENDING ? 'В ожидании' : 'Оплачен',
				total: order.total.toLocaleString('ru-RU', {
					style: 'currency',
					currency: 'RUB',
					minimumFractionDigits: 0,
					maximumFractionDigits: 0,
				}),
			}))
		: []

	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<h1>Ваши заказы</h1>
				<Button variant='primary' onClick={() => logout()}>
					<LogOut />
					Выйти из аккаунта
				</Button>
			</div>
			<DataTable columns={orderColumns} data={formattedOrders} />
		</div>
	)
}
