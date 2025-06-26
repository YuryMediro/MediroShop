import { CategoryId } from '@/components/CategoryId/CategoryId'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { Helmet } from 'react-helmet-async'

export const CategoryIdPage = () => {
	return (
		<>
			<Helmet>
				<title>{`Страница с категориями | ${SITE_NAME}`}</title>
				<meta name='description' content={SITE_DESCRIPTION} />
				<meta
					property='og:title'
					content={`Страница с категориями | ${SITE_NAME}`}
				/>
				<meta property='og:description' content={SITE_DESCRIPTION} />
				{/* <link rel='canonical' href='https://yoursite.com/' /> */}
			</Helmet>
			<CategoryId />
		</>
	)
}
