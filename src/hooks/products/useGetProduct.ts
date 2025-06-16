import { productService } from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'

export default function useGetProduct() {
	const { storeId } = useParams({ from: '/store/$storeId' })

	const { data: products, isLoading } = useQuery({
		queryKey: ['get products for store dashboard', storeId],
		queryFn: () => productService.getByStoreId(storeId),
	})

    return {products, isLoading}
}
