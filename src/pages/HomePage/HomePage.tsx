import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { Link } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'

interface HomePageProps {}

export const HomePage = ({}: HomePageProps) => {
	return (
		<>
			<Helmet>
				<title>{`Главная страница | ${SITE_NAME}`}</title>
				<meta name='description' content={SITE_DESCRIPTION} />
				<meta property='og:title' content={`Главная страница | ${SITE_NAME}`} />
				<meta property='og:description' content={SITE_DESCRIPTION} />
				{/* <link rel='canonical' href='https://yoursite.com/' /> */}
			</Helmet>
			<div>Главная страница</div>
			<div>
				<Link to='/auth'>Auth</Link>
			</div>
			<div>
				<Link to='/dashboard'>Dashboard</Link>
			</div>
		</>
	)
}
