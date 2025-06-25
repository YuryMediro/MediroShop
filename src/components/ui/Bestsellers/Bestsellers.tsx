import type { IProduct } from '@/shared/types/product.interface'
import s from './Bestsellers.module.scss'
import { ProductCard } from './ProductCard/ProductCard'
import { Link } from 'react-router-dom'

interface BestsellersProps {
	title: string
	description?: string
	products: IProduct[]
}

export const Bestsellers = ({
	title,
	description,
	products,
}: BestsellersProps) => {
	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<div className={s.info}>
					<h1>{title}</h1>
					{description && <p>{description}</p>}
				</div>
				<Link className={s.link} to='/'>Узнать больше</Link>
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
