import { Home } from '@/components/Home/Home'
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import useGetProductMostPopular from '@/hooks/products/useGetProductMostPopular'
import { Helmet } from 'react-helmet-async'

export const HomePage = () => {
	const { data } = useGetProductMostPopular()

	return (
		<>
			<Helmet>
				<title>{`Главная страница | ${SITE_NAME}`}</title>
				<meta name='description' content={SITE_DESCRIPTION} />
				<meta property='og:title' content={`Главная страница | ${SITE_NAME}`} />
				<meta property='og:description' content={SITE_DESCRIPTION} />
				{/* <link rel='canonical' href='https://yoursite.com/' /> */}
			</Helmet>
			<Home products={data ?? []} />
		</>
	)
}
