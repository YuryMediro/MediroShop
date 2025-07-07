import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'
import s from './Cart.module.scss'
import { Button } from '@/components/ui/Button'

import { CartItem } from './CartItem'
import useGetCart from '@/hooks/cart/useGetCartById'

export const Cart = () => {
	const { carts, totalPrice } = useGetCart()

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button type='button' variant='ghost'>
					Корзина
				</Button>
			</SheetTrigger>
			<SheetContent className={s.cart}>
				<h2 className={s.title}>Корзина товаров</h2>
				<div className={s.items}>
					{carts.length === 0 ? (
						<p className={s.empty}>Корзина пуста</p>
					) : (
						carts.map(cart => <CartItem key={cart.id} cart={cart} />)
					)}
				</div>
				{carts.length > 0 && (
					<>
						<div className={s.total}>
							Итого к оплате:{' '}
							{totalPrice?.toLocaleString('ru-RU', {
								style: 'currency',
								currency: 'RUB',
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
							})}
						</div>
						<Button className={s.button} variant='primary'>
							Перейти к оплате
						</Button>
					</>
				)}
			</SheetContent>
		</Sheet>
	)
}
