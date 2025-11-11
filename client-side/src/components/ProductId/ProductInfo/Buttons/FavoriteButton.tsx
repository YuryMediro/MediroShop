import { Button } from '@/components/ui/Button'
import { useProfile, useToggleFavorite } from '@/hooks/useProfile'
import type { IProduct } from '@/shared/types/product.interface'
import { HeartMinusIcon, HeartPlusIcon } from 'lucide-react'

interface FavoriteButtonProps {
	product: IProduct
}

export const FavoriteButton = ({ product }: FavoriteButtonProps) => {
	const { user } = useProfile()

	const { toggleFavorite, isPending } = useToggleFavorite(product.id)

	if (!user) return null

	const isFavorite = user.favorites.some(favorite => favorite.id === product.id)

	return (
		<Button
			variant='secondary'
			size='icon'
			disabled={isPending}
			onClick={() => toggleFavorite()}
		>
			{isFavorite ? (
				<HeartMinusIcon color='#F43F5E' className='size-5' />
			) : (
				<HeartPlusIcon className='size-5' />
			)}
		</Button>
	)
}
