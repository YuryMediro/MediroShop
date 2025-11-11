import {
	useGetCategoryById,
	useGetProductsByCategory,
} from '@/hooks/categories/useGetProductsCategory'
import { Catalog } from '../ui/Catalog/Catalog'
import { LoaderStatistics } from '../StoreId/statistics/MainStatistics/LoaderStatistics'

export const CategoryId = () => {
	const { products } = useGetProductsByCategory()
	const { category } = useGetCategoryById()

	if (!products) {
		return (
			<div className='flex justify-center h-screen'>
				<LoaderStatistics />
			</div>
		)
	}

	return (
		<div className='my-6'>
			{category && (
				<Catalog
					title={category.title}
					description={category.description}
					products={products}
				/>
			)}
		</div>
	)
}
