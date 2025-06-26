import {
	useGetCategoryById,
	useGetProductsByCategory,
} from '@/hooks/categories/useGetProductsCategory'
import { Catalog } from '../ui/Catalog/Catalog'

export const CategoryId = () => {
	const { products } = useGetProductsByCategory()
	const { category } = useGetCategoryById()
	console.log('Category data:', category)

	return (
		<div className='my-6'>
			{category && (
				<Catalog
					title={category.title}
					description={category.description}
					products={products || []}
				/>
			)}
		</div>
	)
}
