import { Dashboard } from '@/components/Dashboard/Dashboard'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { Helmet } from 'react-helmet-async'

export default function DashboardPage() {
	return (
		<>
			<Helmet>
				<title>{`Личный кабинет | ${SITE_NAME}`}</title>
				<meta name='description' content={SITE_DESCRIPTION} />
				<meta property='og:title' content={`Личный кабинет | ${SITE_NAME}`} />
				<meta property='og:description' content={SITE_DESCRIPTION} />
				{/* <link rel='canonical' href='https://yoursite.com/' /> */}
			</Helmet>
			<Dashboard />
		</>
	)
}
