import { ProductCreate } from '@/components/StoreId/products/ProductCreate/ProductCreate'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { Helmet } from 'react-helmet-async'

export const CreateProductsPage = () => {
	return (
		<>
			<Helmet>
				<title>{`Создание товара | ${SITE_NAME}`}</title>
				<meta name='description' content={SITE_DESCRIPTION} />
				<meta property='og:title' content={`Создание товара | ${SITE_NAME}`} />
				<meta property='og:description' content={SITE_DESCRIPTION} />
				{/* <link rel='canonical' href='https://yoursite.com/' /> */}
			</Helmet>
			<ProductCreate />
		</>
	)
}
