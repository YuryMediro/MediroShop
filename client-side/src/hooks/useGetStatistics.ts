import { statisticsService } from '@/services/statistics.service'
import { useQuery } from '@tanstack/react-query'

export const useGetStatistics = (storeId:string) => {

	const { data: main, isLoading } = useQuery({
		queryKey: ['get main statistics', storeId],
		queryFn: () => statisticsService.getMain(storeId),
	})
	const { data: middle } = useQuery({
		queryKey: ['get middle statistics', storeId],
		queryFn: () => statisticsService.getMiddle(storeId),
	})

	return { main, middle, isLoading }
}
