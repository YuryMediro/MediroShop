import { reviewService } from '@/services/review.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useDeleteReview = () => {
	const queryClient = useQueryClient()

	const { mutate: deleteReview } = useMutation({
		mutationKey: ['delete review'],
		mutationFn: (reviewId: string) => reviewService.delete(reviewId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get products byId'],
			})
			toast.success('Отзыв удалён')
		},
		onError() {
			toast.error('Ошибка при удалении отзыва')
		},
	})
	return { deleteReview }
}
