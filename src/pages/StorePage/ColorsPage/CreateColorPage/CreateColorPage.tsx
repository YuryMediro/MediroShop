import { ColorCreate } from '@/components/StoreId/colors/ColorCreate/ColorCreate'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { Helmet } from 'react-helmet-async'

export const CreateColorsPage = () => {
	return (
		<>
			<Helmet>
				<title>{`Создание цвета | ${SITE_NAME}`}</title>
				<meta name='description' content={SITE_DESCRIPTION} />
				<meta property='og:title' content={`Создание цвета | ${SITE_NAME}`} />
				<meta property='og:description' content={SITE_DESCRIPTION} />
				{/* <link rel='canonical' href='https://yoursite.com/' /> */}
			</Helmet>
			<ColorCreate />
		</>
	)
}
