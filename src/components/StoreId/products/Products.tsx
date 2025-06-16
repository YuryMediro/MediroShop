import { Button } from '@/components/ui/Button'
import s from '../Store.module.scss'
import { Plus } from 'lucide-react'
import { DataTable } from '@/components/ui/DataTable/DataTable'
import { productColumns, type IProductColumn } from './ProductColumns'
import useGetProduct from '@/hooks/products/useGetProduct'
import { DataTableLoading } from '@/components/ui/DataTable/DataTableLoading'
import { STORE_URL } from '@/config/url.config'
import { Link, useParams } from 'react-router-dom'

export const Products = () => {
	const { storeId } = useParams()
	const { products, isLoading } = useGetProduct(storeId!)

	const formattedProducts: IProductColumn[] = products
		? products.map(product => ({
				id: product.id,
				title: product.title,
				price: product.price.toLocaleString('ru-RU', {
					style: 'currency',
					currency: 'RUB',
				}),
				category: product.category.title,
				color: product.color.value,
				storeId: product.storeId,
			}))
		: []
	return (
		<div className={s.wrapper}>
			{isLoading ? (
				<DataTableLoading />
			) : (
				<>
					<div className={s.header}>
						<div>
							<h2 className={s.title}>Товары ({products?.length})</h2>
							<p className={s.description}>Все товары вашего магазина</p>
						</div>
						<div className={s.buttons}>
							<Link to={STORE_URL.productCreate(storeId)}>
								<Button variant='primary'>
									<Plus />
									Создать
								</Button>
							</Link>
						</div>
					</div>
					<div className={s.table}>
						<DataTable
							columns={productColumns}
							data={formattedProducts}
							filterKey='title'
						/>
					</div>
				</>
			)}
		</div>
	)
}
