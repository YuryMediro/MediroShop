import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import type { IMainStatistics } from '@/shared/types/statistics.interface'
import s from './MainStatistics.module.scss'
import { getIconStatistics } from '@/utils/lucide-react-utils/getIconStatistics'
import CountUp from 'react-countup'

interface MainStatisticsItemProps {
	item: IMainStatistics
}

export const MainStatisticsItem = ({ item }: MainStatisticsItemProps) => {
	const Icon = getIconStatistics(item.id)
	return (
		<Card className={s.card}>
			<CardHeader className={s.header}>
				<CardTitle>{item.name}</CardTitle>
				<Icon />
			</CardHeader>
			<CardContent className={s.content}>
				<h2>
					{item.id !== 1 ? (
						item.id === 4 ? (
							<CountUp end={item.value }decimals={1} decimal='.' />
						) : (
							<CountUp end={item.value} />
						)
					) : (
						<CountUp end={item.value} separator=' ' suffix=' ₽' />
					)}
				</h2>
			</CardContent>
		</Card>
	)
}
