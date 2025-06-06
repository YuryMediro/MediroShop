import { statisticsService } from '@/services/statistics.service'
import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'

export const useGetStatistics = () => {
	const { storeId } = useParams({ from: '/store/$storeId' })

	const { data: main, isLoading } = useQuery({
		queryKey: ['get main statistics', storeId],
		queryFn: () => statisticsService.getMain(storeId),
	})
	const { data: middle } = useQuery({
		queryKey: ['get main statistics', storeId],
		queryFn: () => statisticsService.getMiddle(storeId),
	})

	return { main, middle, isLoading }
}
