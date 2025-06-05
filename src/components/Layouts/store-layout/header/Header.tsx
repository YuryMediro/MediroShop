import { MobileSidebar } from '../sidebar/MobileSidebar'
import s from './Header.module.scss'

export const Header = () => {
	return (
		<div className={s.header}>
			Header
			<MobileSidebar />
		</div>
	)
}
