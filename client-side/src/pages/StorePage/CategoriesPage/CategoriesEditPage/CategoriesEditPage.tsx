import { CategoryEdit } from '@/components/StoreId/categories/categoryId/CategoryEdit'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { Helmet } from 'react-helmet-async'

export const CategoriesEditPage = () => {
	return (
		<>
			<Helmet>
				<title>{`Настройки категории | ${SITE_NAME}`}</title>
				<meta name='description' content={SITE_DESCRIPTION} />
				<meta
					property='og:title'
					content={`Настройки категории | ${SITE_NAME}`}
				/>
				<meta property='og:description' content={SITE_DESCRIPTION} />
				{/* <link rel='canonical' href='https://yoursite.com/' /> */}
			</Helmet>
			<CategoryEdit />
		</>
	)
}
