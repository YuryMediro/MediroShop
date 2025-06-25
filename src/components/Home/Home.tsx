import type { IProduct } from '@/shared/types/product.interface'
import { Bestsellers } from '../ui/Bestsellers/Bestsellers'
import { HomeDescription } from './HomeDescription/HomeDescription'

interface HomeProps {
	products: IProduct[]
}

export const Home = ({ products }: HomeProps) => {
	return (
		<>
			<HomeDescription />
			<Bestsellers
				title='Хиты продаж'
				description='Самые популярный товары нашего магазина'
				products={products}
			/>
		</>
	)
}
