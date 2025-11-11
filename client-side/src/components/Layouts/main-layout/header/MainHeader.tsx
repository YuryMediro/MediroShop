import { Logo } from '../../LogoAndName/Logo'
import s from './MainHeader.module.scss'
import { HeaderMenu } from './headerMenu/HeaderMenu'
import { MobileHeaderMenu } from './headerMenu/MobileHeaderMenu'
import { SearchInput } from './searchInput/SearchInput'

export const MainHeader = () => {
	return (
		<div className={s.header}>
			<div>
				<Logo />
			</div>
			<div className={s.mobileMenu}>
				<MobileHeaderMenu />
			</div>
			<div className={s.search}>
				<SearchInput />
			</div>
			<HeaderMenu />
		</div>
	)
}
