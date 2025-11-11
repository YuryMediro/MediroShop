import { Categories } from '@/components/StoreId/categories/Categories'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { Helmet } from 'react-helmet-async'

export const CategoriesPage = () => {
	return (
		<>
			<Helmet>
				<title>{`Категории | ${SITE_NAME}`}</title>
				<meta name='description' content={SITE_DESCRIPTION} />
				<meta property='og:title' content={`Категории | ${SITE_NAME}`} />
				<meta property='og:description' content={SITE_DESCRIPTION} />
				{/* <link rel='canonical' href='https://yoursite.com/' /> */}
			</Helmet>
			<Categories />
		</>
	)
}
