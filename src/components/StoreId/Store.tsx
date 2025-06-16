import s from './Store.module.scss'
import { MainStatistics } from './statistics/MainStatistics/MainStatistics'
import MiddleStatistics from './statistics/MiddleStatistics/MiddleStatistics'

export const Store = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<div>
					<h2 className={s.title}>Статистика</h2>
				</div>
			</div>
			<MainStatistics />
			<MiddleStatistics />
		</div>
	)
}
