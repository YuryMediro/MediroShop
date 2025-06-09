import { useGetStatistics } from '@/hooks/useGetStatistics'
import s from './MiddleStatistics.module.scss'
import { MonthlySales } from './MonthlySales'
import { LastUsers } from './LastUsers'

export default function MiddleStatistics() {
	const { middle } = useGetStatistics()

	return (
		<div className={s.middle}>
			{middle?.monthlySales.length || middle?.lastUsers.length ? (
				<>
					<div className={s.monthlySales}>
						<MonthlySales data={middle.monthlySales} />
					</div>
					<div className={s.lastUsers}>
						<LastUsers data={middle.lastUsers} />
					</div>
				</>
			) : (
				<div>Нету данных для статистики</div>
			)}
		</div>
	)
}
