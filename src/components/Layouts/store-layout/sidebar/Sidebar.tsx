import { Logo } from '../../LogoAndName/Logo'
import { Navigation } from './Navigation/Navigation'
import s from './Sidebar.module.scss'

export const Sidebar = () => {
	return (
		<div className={s.sidebar}>
			<Logo />
			<Navigation />
		</div>
	)
}
