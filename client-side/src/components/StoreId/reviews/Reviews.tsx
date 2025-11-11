import useGetReviews from '@/hooks/reviews/useGetReviews'
import { useParams } from 'react-router-dom'
import { reviewColumns, type IReviewColumn } from './ReviewsColumns'
import { formatDate } from '@/utils/date/form-date'
import { DataTableLoading } from '@/components/ui/DataTable/DataTableLoading'
import s from '../Store.module.scss'
import { DataTable } from '@/components/ui/DataTable/DataTable'

export const Reviews = () => {
	const { storeId } = useParams()
	const { reviews, isLoading } = useGetReviews(storeId!)

	const formattedReviews: IReviewColumn[] = reviews
		? reviews.map(review => ({
				id: review.id,
				createdAt: formatDate(review.createdAt),
				userName: review.user.name,
				rating: Array.from({ length: review.rating })
					.map(() => '⭐️')
					.join(' '),
			}))
		: []

	return (
		<div className={s.wrapper}>
			{isLoading ? (
				<DataTableLoading />
			) : (
				<>
					<div className={s.header}>
						<div>
							<h2 className={s.title}>Отзывы ({reviews?.length})</h2>
							<p className={s.description}>Все отзывы в вашем магазине</p>
						</div>
					</div>
					<div className={s.table}>
						<DataTable columns={reviewColumns} data={formattedReviews} />
					</div>
				</>
			)}
		</div>
	)
}
