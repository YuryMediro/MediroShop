import { reviewService } from '@/services/review.service'
import type { IReviewInput } from '@/shared/types/review.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'

export const useCreateReviews = (storeId: string) => {
	const queryClient = useQueryClient()
	const { productId } = useParams()

	const { mutate: createReview, isPending: isLoadingCreate } = useMutation({
		mutationKey: ['create review'],
		mutationFn: (data: IReviewInput) =>
			reviewService.create(data, productId!, storeId!),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get products byId', productId],
			})
			toast.success('Отзыв Создан')
		},
		onError() {
			toast.error('Ошибка при создание отзыв')
		},
	})

	return { createReview, isLoadingCreate }
}
