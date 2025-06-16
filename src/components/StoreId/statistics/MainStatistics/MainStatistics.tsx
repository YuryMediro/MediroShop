import { useGetStatistics } from '@/hooks/useGetStatistics'
import s from './MainStatistics.module.scss'
import { MainStatisticsItem } from './MainStatisticsItem'
import { LoaderStatistics } from './LoaderStatistics'
import { useParams } from 'react-router-dom'

export const MainStatistics = () => {
	const { storeId } = useParams()
	const { main, isLoading } = useGetStatistics(storeId!)

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
