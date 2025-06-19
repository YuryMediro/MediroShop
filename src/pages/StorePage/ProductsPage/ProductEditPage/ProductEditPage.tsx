import { ProductEdit } from '@/components/StoreId/products/productId/ProductEdit'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { Helmet } from 'react-helmet-async'

export const ProductEditPage = () => {
	return (
		<>
			<Helmet>
				<title>{`Настройки товара | ${SITE_NAME}`}</title>
				<meta name='description' content={SITE_DESCRIPTION} />
				<meta property='og:title' content={`Настройки товара | ${SITE_NAME}`} />
				<meta property='og:description' content={SITE_DESCRIPTION} />
				{/* <link rel='canonical' href='https://yoursite.com/' /> */}
			</Helmet>
            <ProductEdit/>
		</>
	)
}
