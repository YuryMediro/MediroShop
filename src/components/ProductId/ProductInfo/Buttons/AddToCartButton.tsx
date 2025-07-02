import { Button } from '@/components/ui/Button'
import type { IProduct } from '@/shared/types/product.interface'

interface AddToCartButtonProps {
	product: IProduct
}

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
	return (
		<Button variant='primary' size='lg' className='w-full'>
			Добавить в корзину
		</Button>
	)
}
