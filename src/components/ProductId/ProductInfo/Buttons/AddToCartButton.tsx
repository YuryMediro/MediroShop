import { Button } from '@/components/ui/Button'
import { useAddToCart } from '@/hooks/cart/useAddToCart'
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

	const { user } = useProfile()
	
	const handleAddToCart = () => {
		if (!user?.id) {
			toast.error('Вы не авторизованы')
			route('/auth')
			return
		}
		addToCart({ productId: product.id })
	}
	return (
		<Button
			onClick={handleAddToCart}
			disabled={loadingAddToCart}
			variant='primary'
			size='lg'
			className='w-full'
		>
			Добавить в корзину
		</Button>
	)
}
