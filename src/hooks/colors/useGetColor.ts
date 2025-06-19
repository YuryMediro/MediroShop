import { colorService } from '@/services/color.service'
import { useQuery } from '@tanstack/react-query'

export const useGetColor = (storeId: string) => {
	const { data: colors, isLoading } = useQuery({
		queryKey: ['get colors for store dashboard'],
		queryFn: () => colorService.getByStoreId(storeId),
	})
	return { colors, isLoading }
}
