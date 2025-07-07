import type { ICartItem } from '@/shared/types/cart.interface'
import s from './Cart.module.scss'
import { Link } from 'react-router-dom'
interface CartItemProps {
	cart: ICartItem
}

export const CartItem = ({ cart }: CartItemProps) => {
	return (
		<div className={s.item}>
			<Link to={`/product/${cart.product.id}`} className={s.image}>
				<img src={cart.product.images[0]} alt={cart.product.title} />
			</Link>
			<div className={s.description}>
				<h2>{cart.product.title}</h2>
				<p>
					{cart.product.price.toLocaleString('ru-RU', {
						style: 'currency',
						currency: 'RUB',
						minimumFractionDigits: 0,
						maximumFractionDigits: 0,
					})}
				</p>
			</div>
		</div>
	)
}
