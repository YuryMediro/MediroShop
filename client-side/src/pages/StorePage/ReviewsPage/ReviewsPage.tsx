import { Reviews } from '@/components/StoreId/reviews/Reviews'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { Helmet } from 'react-helmet-async'

export const ReviewsPage = () => {
	return (
		<>
			<Helmet>
				<title>{`Отзывы | ${SITE_NAME}`}</title>
				<meta name='description' content={SITE_DESCRIPTION} />
				<meta property='og:title' content={`Отзывы  | ${SITE_NAME}`} />
				<meta property='og:description' content={SITE_DESCRIPTION} />
				{/* <link rel='canonical' href='https://yoursite.com/' /> */}
			</Helmet>
			<Reviews />
		</>
	)
}
