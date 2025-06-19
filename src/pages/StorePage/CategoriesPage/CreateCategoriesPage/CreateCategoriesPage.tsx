import { CategoryCreate } from '@/components/StoreId/categories/CategoryCreate/CategoryCreate'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { Helmet } from 'react-helmet-async'

export const CreateCategoriesPage = () => {
	return (
		<>
			<Helmet>
				<title>{`Создание категории | ${SITE_NAME}`}</title>
				<meta name='description' content={SITE_DESCRIPTION} />
				<meta
					property='og:title'
					content={`Создание категории | ${SITE_NAME}`}
				/>
				<meta property='og:description' content={SITE_DESCRIPTION} />
				{/* <link rel='canonical' href='https://yoursite.com/' /> */}
			</Helmet>
			<CategoryCreate />
		</>
	)
}
