import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'
import { Menu } from 'lucide-react'
import s from './MobileHeaderMenu.module.scss'
import { MobileNavigationMenu } from './MobileNavigationMenu/MobileNavigationMenu'

export const MobileHeaderMenu = () => {
	return (
		<Sheet>
			<SheetTrigger className={s.trigger}>
				<Menu />
			</SheetTrigger>
			<SheetContent side='left' className={s.content}>
				<MobileNavigationMenu />
			</SheetContent>
		</Sheet>
	)
}
