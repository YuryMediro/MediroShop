import type { IProduct } from '@/shared/types/product.interface'
import s from './ProductCard.module.scss'
import { Link } from 'react-router-dom'

interface ProductCardProps {
	product: IProduct
}

export const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<div className={s.card}>
			<Link to={`/product/${product.id}`}>
				<img
					src={product.images[0]}
					alt={product.title}
                   
				/>
			</Link>
			<h3 className={s.title}>{product.title}</h3>
			<Link className={s.category} to={`/category/${product.category.id}`}>
				{product.category.title}
			</Link>
			<p className={s.price}>
				{product.price.toLocaleString('ru-RU', {
					style: 'currency',
					currency: 'RUB',
					minimumFractionDigits: 0,
					maximumFractionDigits: 0,
				})}
			</p>
		</div>
	)
}
