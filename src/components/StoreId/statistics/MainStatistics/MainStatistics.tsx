import { useGetStatistics } from '@/hooks/useGetStatistics'
import s from './MainStatistics.module.scss'
import { MainStatisticsItem } from './MainStatisticsItem'
import { LoaderStatistics } from './LoaderStatistics'

export const MainStatistics = () => {
	const { main, isLoading } = useGetStatistics()

	return (
		<div className={s.main}>
			{isLoading ? (
				<div className={s.loader}>
					<LoaderStatistics />
				</div>
			) : main?.length ? (
				main.map(item => <MainStatisticsItem key={item.id} item={item} />)
			) : (
				<div>Нету данных для статистики</div>
			)}
		</div>
	)
}
