import { productService } from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'

export default function useGetAllProducts() {
	const { data } = useQuery({
		queryKey: ['get all product'],
		queryFn: async () => await productService.getAll(),
	})

	return { data }
}
