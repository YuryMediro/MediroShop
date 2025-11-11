import { productService } from '@/services/product.service'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

export const useSimilarProduct = () => {
	const { productId } = useParams<{ productId: string }>()

	const { data: similarProduct } = useQuery({
		queryKey: ['get similar product', productId],
		queryFn: () => {
			return productService.getSimilar(productId!)
		},
		enabled: !!productId,
	})

	return { similarProduct }
}
