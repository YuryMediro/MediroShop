import { HomeDescription } from './HomeDescription/HomeDescription'
import { Catalog } from '../ui/Catalog/Catalog'
import useGetProductMostPopular from '@/hooks/products/useGetProductMostPopular'
import { LoaderStatistics } from '../StoreId/statistics/MainStatistics/LoaderStatistics'


export const Home = () => {
	const { data } = useGetProductMostPopular()

if (!data) {
	return (
		<div className='flex justify-center items-center  h-screen'>
			<LoaderStatistics />
		</div>
	)
}

	return (
		<>
			<HomeDescription />
			<Catalog
				title='Хиты продаж'
				description='Самые популярный товары нашего магазина'
				products={data}
				link='/explorer'
			/>
		</>
	)
}
