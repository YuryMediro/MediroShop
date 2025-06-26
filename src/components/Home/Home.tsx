import type { IProduct } from '@/shared/types/product.interface'
import { HomeDescription } from './HomeDescription/HomeDescription'
import { Catalog } from '../ui/Catalog/Catalog'

interface HomeProps {
	products: IProduct[]
}

export const Home = ({ products }: HomeProps) => {
	return (
		<>
			<HomeDescription />
			<Catalog
				title='Хиты продаж'
				description='Самые популярный товары нашего магазина'
				products={products}
				link='/'
			/>
		</>
	)
}
