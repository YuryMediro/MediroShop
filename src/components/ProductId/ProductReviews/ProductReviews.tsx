import { useProfile } from '@/hooks/useProfile'
import s from './ProductReviews.module.scss'
import { Button } from '@/components/ui/Button'
import { Plus, Trash2 } from 'lucide-react'
import ReviewModal from '@/components/ui/modals/ReviewModal'
import type { IProduct } from '@/shared/types/product.interface'
import noImage from '@assets/no-user-image.png'
import ConfirmModal from '@/components/ui/modals/ConfirmModal'
import { useDeleteReview } from '@/hooks/reviews/useDeleteReview'
import { Rating } from 'react-simple-star-rating'

interface ProductReviewsProps {
	product: IProduct
}

export const ProductReviews = ({ product }: ProductReviewsProps) => {
	const { user } = useProfile()

	const { deleteReview } = useDeleteReview()
	return (
		<>
			<div className={s.header}>
				<h1>Отзывы</h1>
				{user && (
					<ReviewModal storeId={product.storeId}>
						<Button variant='ghost'>
							<Plus />
							Оставить отзыв
						</Button>
					</ReviewModal>
				)}
			</div>
			<div className={s.reviews}>
				{product.reviews.length ? (
					product.reviews.map(review => (
						<div className={s.review} key={review.id}>
							<div className={s.header}>
								<div className={s.user}>
									<img
										src={review.user.picture}
										alt={review.user.name}
										width={40}
										height={40}
										onError={e => {
											const target = e.target as HTMLImageElement
											target.src = noImage
										}}
									/>
									{review.user.name}
								</div>
								{review.user.id === user?.id && (
									<ConfirmModal handleClick={() => deleteReview(review.id)}>
										<button className={s.delete} >
											<Trash2 />
										</button>
									</ConfirmModal>
								)}
							</div>
							<Rating
								readonly
								initialValue={review.rating}
								SVGstyle={{ display: 'inline-block' }}
								size={18}
								allowFraction
								transition
							/>
							<div className={s.text}>{review.text}</div>
						</div>
					))
				) : (
					<div className={s.empty}>У этого товара нету отзывов</div>
				)}
			</div>
		</>
	)
}
