import { Button } from '@/components/ui/Button'
import { useAddToCart } from '@/hooks/cart/useAddToCart'
import { useProfile } from '@/hooks/useProfile'
import type { IProduct } from '@/shared/types/product.interface'
import toast from 'react-hot-toast'

interface AddToCartButtonProps {
	product: IProduct
}

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
	const { addToCart, loadingAddToCart } = useAddToCart()
	const { user } = useProfile()
	const handleAddToCart = () => {
		if (!user?.id) {
			toast.error('Вы не авторизованы')
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
