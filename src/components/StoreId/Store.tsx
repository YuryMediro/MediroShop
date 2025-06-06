import { useParams } from '@tanstack/react-router'
import StoreLayout from '../Layouts/store-layout/StoreLayout'
import s from './Store.module.scss'
import { MainStatistics } from './statistics/MainStatistics/MainStatistics'
interface StoreProps {}

export const Store = ({}: StoreProps) => {
	const { storeId } = useParams({ from: '/store/$storeId' })
	return (
		<StoreLayout>
			<div className={s.wrapper}>
				Store id: {storeId}
				<h2 className={s.title}>Статистика</h2>
				<MainStatistics />
			</div>
		</StoreLayout>
	)
}
