import s from './Store.module.scss'
import { MainStatistics } from './statistics/MainStatistics/MainStatistics'
import MiddleStatistics from './statistics/MiddleStatistics/MiddleStatistics'
import { Helmet } from 'react-helmet-async'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
interface StoreProps {}

export const Store = ({}: StoreProps) => {
	return (
		<>
			<Helmet>
				<title>{`Управление магазином | ${SITE_NAME}`}</title>
				<meta name='description' content={SITE_DESCRIPTION} />
				<meta
					property='og:title'
					content={`Управление магазином  | ${SITE_NAME}`}
				/>
				<meta property='og:description' content={SITE_DESCRIPTION} />
				{/* <link rel='canonical' href='https://yoursite.com/' /> */}
			</Helmet>

			<div className={s.wrapper}>
				<h2 className={s.title}>Статистика</h2>
				<MainStatistics />
				<MiddleStatistics />
			</div>
		</>
	)
}
