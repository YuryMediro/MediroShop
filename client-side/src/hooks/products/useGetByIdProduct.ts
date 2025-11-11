import { productService } from '@/services/product.service'
import type { IProduct } from '@/shared/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

export default function useGetByIdProduct() {
	const { productId } = useParams<{ productId: string }>()

	const { data: product } = useQuery<IProduct>({
		queryKey: ['get products byId' , productId],
		queryFn: () => productService.getById(productId!),
		enabled: !!productId,
	})

	return { product }
}
