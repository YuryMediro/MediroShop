import { useParams } from 'react-router-dom'
import { ProductForm } from '../ProductForm'
import { useGetCategories } from '@/hooks/categories/useGetCategories'
import { useGetColor } from '@/hooks/colors/useGetColor'
import { useQuery } from '@tanstack/react-query'
import { productService } from '@/services/product.service'

export const ProductEdit = () => {
	const { storeId, productId } = useParams()
	const { categories } = useGetCategories(storeId!)
	const { colors } = useGetColor(storeId!)
    
    const { data } = useQuery({
			queryKey: ['get product'],
			queryFn: () => productService.getById(productId!),
		})

	return (
		<ProductForm
			categories={categories || []}
			colors={colors || []}
			product={data}
		/>
	)
}
