import type { ICartItem } from '@/shared/types/cart.interface'
import s from './Cart.module.scss'
import { Link } from 'react-router-dom'
import { useUpdateCart } from '@/hooks/cart/useUpdateCart'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useDeleteCartItem } from '@/hooks/cart/useDeleteCartItem'

interface CartItemProps {
	cart: ICartItem
}

export const CartItem = ({ cart }: CartItemProps) => {
	const { isLoadingUpdate, updateCart } = useUpdateCart(cart.id)
	const { deleteCartItem, loadingDeleteCartItem } = useDeleteCartItem(cart.id)
	const changeQuantity = (newQuantity: number) => {
		if (newQuantity < 1 || isLoadingUpdate) return

		updateCart({ quantity: newQuantity })
	}
	const handleDelete = () => {
		deleteCartItem()
	}

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

				<div className={s.actions}>
					<div className={s.actionsQuantity}>
						<Button
							variant='ghost'
							size='icon'
							onClick={() => changeQuantity(cart.quantity - 1)}
							disabled={isLoadingUpdate || cart.quantity === 1}
						>
							<Minus />
						</Button>
						<p className={s.quantity}>{cart.quantity}</p>
						<Button
							variant='ghost'
							size='icon'
							onClick={() => changeQuantity(cart.quantity + 1)}
							disabled={isLoadingUpdate}
						>
							<Plus />
						</Button>
					</div>
						<Button
							variant='ghost'
							size='icon'
							onClick={handleDelete}
							disabled={loadingDeleteCartItem}
						>
							<Trash2 />
						</Button>
					<div>
					</div>
				</div>
			</div>
		</div>
	)
}
