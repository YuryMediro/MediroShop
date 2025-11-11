import useGetAllProducts from '@/hooks/products/useGetAllProducts'
import { Catalog } from '../ui/Catalog/Catalog'
import { LoaderStatistics } from '../StoreId/statistics/MainStatistics/LoaderStatistics'
import { useLocation } from 'react-router-dom'

export const Explorer = () => {
	const location = useLocation()
	const searchParams = new URLSearchParams(location.search)
	const searchTerm = searchParams.get('searchTerm') || ''

	const { data } = useGetAllProducts()
    
	if (!data) {
		return (
			<div className='flex justify-center h-screen'>
				<LoaderStatistics />
			</div>
		)
	}

	const filteredProducts = data.filter(
		product =>
			product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			product.category.title.toLowerCase().includes(searchTerm.toLowerCase())
	)

	return (
		<div className='my-6'>
			<Catalog
				title={
					searchTerm ? `Поиск по запросу: "${searchTerm}"` : 'Каталог товаров'
				}
				description={
					searchTerm ? '' : 'Тут представлены все товары нашего магазина.'
				}
				products={filteredProducts}
			/>
		</div>
	)
}
