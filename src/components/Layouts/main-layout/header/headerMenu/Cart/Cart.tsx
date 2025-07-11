import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'
import s from './Cart.module.scss'
import { Button } from '@/components/ui/Button'

import { CartItem } from './CartItem'
import useGetCart from '@/hooks/cart/useGetCartById'
import { ScrollArea } from '@/components/ui/scroll-area'
import CountUp from 'react-countup'
import { useCreatePayment } from '@/hooks/order/useCreatePayment'

export const Cart = () => {
	const { carts, totalPrice } = useGetCart()

	const { createPayment, isLoadingPayment } = useCreatePayment()

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button type='button' variant='ghost'>
					Корзина ({carts.length})
				</Button>
			</SheetTrigger>
			<SheetContent className={s.cart}>
				<h2 className={s.title}>Корзина товаров</h2>
				<ScrollArea className='max-h-[84%]'>
					<div className={s.items}>
						{carts.length === 0 ? (
							<p className={s.empty}>Корзина пуста</p>
						) : (
							carts.map(cart => <CartItem key={cart.id} cart={cart} />)
						)}
					</div>
				</ScrollArea>
				{carts.length > 0 && (
					<>
						<div className={s.total}>
							Итого к оплате:{' '}
							<CountUp
								end={totalPrice || 0}
								separator=' '
								suffix='  ₽'
								key={totalPrice}
							/>
						</div>
						<Button
							className={s.button}
							variant='primary'
							disabled={isLoadingPayment}
							onClick={() => createPayment()}
						>
							Перейти к оплате
						</Button>
					</>
				)}
			</SheetContent>
		</Sheet>
	)
}
