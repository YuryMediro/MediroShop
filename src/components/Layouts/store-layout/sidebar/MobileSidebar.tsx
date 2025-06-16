import { Menu } from 'lucide-react'
import { Sidebar } from './Sidebar'
import s from './MobileSidebar.module.scss'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'
export const MobileSidebar = () => {
	return (
		<Sheet>
			<SheetTrigger className={s.trigger}>
				<Menu />
			</SheetTrigger>
			<SheetContent side='left' className={s.content}>
				<Sidebar />
			</SheetContent>
		</Sheet>
	)
}
