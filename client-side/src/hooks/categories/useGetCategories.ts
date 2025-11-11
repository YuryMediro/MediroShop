import { categoryService } from '@/services/category.service'
import { useQuery } from '@tanstack/react-query'

export const useGetCategories = (storeId: string) => {
	const { data: categories, isLoading } = useQuery({
		queryKey: ['get categories for store dashboard'],
		queryFn: () => categoryService.getByStoreId(storeId),
	})
	return { categories, isLoading }
}
