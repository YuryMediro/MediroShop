import type { IProduct } from '@/shared/types/product.interface'
import s from './Catalog.module.scss'
import { ProductCard } from './ProductCard/ProductCard'
import { Link } from 'react-router-dom'

interface CatalogProps {
	title: string
	description?: string
	products: IProduct[]
	link?: string
}

export const Catalog = ({
	title,
	description,
	products,
	link,
}: CatalogProps) => {
	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<div className={s.info}>
					<h1>{title}</h1>
					{description && <p>{description}</p>}
				</div>
				{link && (
					<Link className={s.link} to='/explorer'>
						Узнать больше
					</Link>
				)}
			</div>
			<div className={s.catalog}>
				<div className={s.products}>
					{products.length ? (
						products.map(product => (
							<ProductCard key={product.id} product={product} />
						))
					) : (
						<div className={s.empty}>Ничего не найдено</div>
					)}
				</div>
			</div>
		</div>
	)
}
