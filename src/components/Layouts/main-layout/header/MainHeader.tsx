import { Logo } from '../../LogoAndName/Logo'
import s from './MainHeader.module.scss'
import { HeaderMenu } from './headerMenu/HeaderMenu'
import { SearchInput } from './searchInput/SearchInput'

export const MainHeader = () => {
	return (
		<div className={s.header}>
			<Logo />
			<div className={s.search}>
				<SearchInput />
			</div>
			<HeaderMenu />
		</div>
	)
}
