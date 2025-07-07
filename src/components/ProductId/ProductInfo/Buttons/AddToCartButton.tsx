import { Button } from '@/components/ui/Button'
import type { IProduct } from '@/shared/types/product.interface'
import { useMutation } from '@tanstack/react-query'

interface AddToCartButtonProps {
	product: IProduct
}

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
	// const mutate = useMutation({
	// 	mutationKey: ['addToCart'],
	// 	mutationFn: apo
	// })
	return (
		<Button variant='primary' size='lg' className='w-full'>
			Добавить в корзину
		</Button>
	)
}
