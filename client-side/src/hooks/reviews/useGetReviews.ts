import { reviewService } from '@/services/review.service'
import { useQuery } from '@tanstack/react-query'

export default function useGetReviews(storeId: string) {
	const { data: reviews, isLoading } = useQuery({
		queryKey: ['get reviews for store dashboard'],
		queryFn: () => reviewService.getByStoreId(storeId),
	})

	return { reviews, isLoading }
}
