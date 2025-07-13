import { productService } from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'

export default function useGetProductMostPopular() {
	const { data } = useQuery({
		queryKey: ['get most popular product'],
		queryFn: async () => (await productService.getMostPopular()).slice(0, 6),
	})

	return { data }
}
