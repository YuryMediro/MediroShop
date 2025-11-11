import { Settings } from '@/components/StoreId/settings/Settings'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { Helmet } from 'react-helmet-async'

export const SettingsPage = () => {
	return (
		<>
			<Helmet>
				<title>{`Настройки магазина | ${SITE_NAME}`}</title>
				<meta name='description' content={SITE_DESCRIPTION} />
				<meta
					property='og:title'
					content={`Настройки магазина  | ${SITE_NAME}`}
				/>
				<meta property='og:description' content={SITE_DESCRIPTION} />
				{/* <link rel='canonical' href='https://yoursite.com/' /> */}
			</Helmet>
			<Settings />
		</>
	)
}


