import { Store } from '@/components/StoreId/Store'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { Helmet } from 'react-helmet-async'

export const StorePage = () => {
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
			<Store />
		</>
	)
}
