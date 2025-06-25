import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'
import s from './Cart.module.scss'
import { Button } from '@/components/ui/Button'

export const Cart = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button type='button' variant='ghost'>
					Корзина
				</Button>
			</SheetTrigger>
			<SheetContent className={s.cart}>
				<h2 className={s.title}>Корзина товаров</h2>
				<div className={s.items}></div>
			</SheetContent>
		</Sheet>
	)
}
