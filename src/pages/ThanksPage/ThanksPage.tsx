import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { Helmet } from 'react-helmet-async'
import s from '../../components/Home/HomeDescription/HomeDescription.module.scss'
import { Button } from '../../components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const ThanksPage = () => {
	return (
		<>
			<Helmet>
				<title>{`Спасибо за покупку | ${SITE_NAME}`}</title>
				<meta name='description' content={SITE_DESCRIPTION} />
				<meta
					property='og:title'
					content={`Спасибо за покупку | ${SITE_NAME}`}
				/>
				<meta property='og:description' content={SITE_DESCRIPTION} />
				{/* <link rel='canonical' href='https://yoursite.com/' /> */}
			</Helmet>

			<div className={s.wrapper}>
				<h1 className={s.header}>Спасибо за покупку!</h1>
				<p className={s.description}>
					Спасибо за ваш заказ! Мы ценим ваше доверие и приложим все усилия,
					чтобы доставить ваш заказ как можно скорее.
				</p>
				<Link to='/'>
					<Button variant='primary'>
						На главную <ArrowRight />
					</Button>
				</Link>
			</div>
		</>
	)
}
