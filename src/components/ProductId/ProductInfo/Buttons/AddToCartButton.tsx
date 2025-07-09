import { Button } from '@/components/ui/Button'
import { useAddToCart } from '@/hooks/cart/useAddToCart'
import { useDeleteCartItem } from '@/hooks/cart/useDeleteCartItem'
import useGetCart from '@/hooks/cart/useGetCartById'
import { useProfile } from '@/hooks/useProfile'
import type { IProduct } from '@/shared/types/product.interface'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

interface AddToCartButtonProps {
	product: IProduct
}

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
	const route = useNavigate()

	const { addToCart, loadingAddToCart } = useAddToCart()

	const { carts } = useGetCart()
	const cartItem = carts.find(cart => cart.product.id === product.id)

	const { deleteCartItem, loadingDeleteCartItem } = useDeleteCartItem(
		cartItem?.id || ''
	)

	const { user } = useProfile()

	const isInCart = !!cartItem

	const handleAddOrRemoveFromCart = () => {
		if (!user?.id) {
			toast.error('Вы не авторизованы')
			route('/auth')
			return
		}
		if (isInCart) {
			deleteCartItem()
		} else {
			addToCart({ productId: product.id })
		}
	}
	
	return (
		<Button
			onClick={handleAddOrRemoveFromCart}
			disabled={loadingAddToCart || loadingDeleteCartItem}
			variant='primary'
			size='lg'
			className='w-full'
		>
			{isInCart ? 'Удалить из корзины' : 'Добавить в корзину'}
		</Button>
	)
}
