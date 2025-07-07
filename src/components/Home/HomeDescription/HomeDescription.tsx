import { SITE_DESCRIPTION } from '@/constants/seo.constants'
import s from './HomeDescription.module.scss'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const HomeDescription = () => {
	return (
		<div className={s.wrapper}>
			<h1 className={s.header}>
				Ваш шопинг, ваше удовольствие - <span>все в одном месте</span>
			</h1>
			<p className={s.description}>{SITE_DESCRIPTION}</p>
			<Link to='/explorer'>
				<Button variant='primary'>
					За покупками <ArrowRight />
				</Button>
			</Link>
		</div>
	)
}
