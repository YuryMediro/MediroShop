import { ColorEdit } from '@/components/StoreId/colors/colorId/ColorEdit'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { Helmet } from 'react-helmet-async'

export const ColorEditPage = () => {
	return (
		<>
			<Helmet>
				<title>{`Настройки цвета | ${SITE_NAME}`}</title>
				<meta name='description' content={SITE_DESCRIPTION} />
				<meta property='og:title' content={`Настройки цвета | ${SITE_NAME}`} />
				<meta property='og:description' content={SITE_DESCRIPTION} />
				{/* <link rel='canonical' href='https://yoursite.com/' /> */}
			</Helmet>
			<ColorEdit />
		</>
	)
}
