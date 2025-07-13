import { SITE_NAME } from '@/constants/seo.constants'
import logo from '@/assets/logo.svg'
import s from './Logo.module.scss'
import { Link } from 'react-router-dom'



export const Logo = () => {
	return (
		<Link to='/' className={s.logo}>
			<img src={logo} alt={SITE_NAME} width={35} height={35} />
			<div>{SITE_NAME}</div>
		</Link>
	)
}
