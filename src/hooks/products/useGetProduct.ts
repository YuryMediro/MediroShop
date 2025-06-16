import { productService } from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'

export default function useGetProduct(storeId: string) {
	const { data: products, isLoading } = useQuery({
		queryKey: ['get products for store dashboard', storeId],
		queryFn: () => productService.getByStoreId(storeId),
	})

	return { products, isLoading }
}
