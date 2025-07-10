import type { IProduct } from '@/shared/types/product.interface'
import s from './ProductInfo.module.scss'
import { getReviewEnding } from '@/utils/review/getReviewEnding'
import { FavoriteButton } from './Buttons/FavoriteButton'
import { AddToCartButton } from './Buttons/AddToCartButton'
import { Link } from 'react-router-dom'

interface ProductInfoProps {
	product: IProduct
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
	const rating =
		product.reviews.length > 0
			? (
					product.reviews.reduce((acc, item) => acc + item.rating, 0) /
					product.reviews.length
				).toFixed(1)
			: '0.0'

	return (
		<div className={s.wrapper}>
			<h1 className={s.title}>{product.title}</h1>
			<div className={s.price}>
				{product.price.toLocaleString('ru-RU', {
					style: 'currency',
					currency: 'RUB',
					minimumFractionDigits: 0,
					maximumFractionDigits: 0,
				})}
			</div>
			<hr />
			<p className={s.description}>{product.description}</p>
			<hr />
			<div className={s.label}>
				<h3>Цвет: </h3>
				<div
					className={s.color}
					style={{ backgroundColor: product.color.value }}
				/>
			</div>
			<div className={s.label}>
				<Link to={`/category/${product.category.id}`}>
					<h3>
						Категория: <span>{product.category.title}</span>
					</h3>
				</Link>
			</div>
			<div className={s.label}>
				<h3>Средний рейтинг: </h3>
				<div className='text-sm'>
					⭐ {rating} | {getReviewEnding(product.reviews.length)}
				</div>
			</div>
			<hr />
			<div className={s.buttons}>
				<AddToCartButton product={product} />
				<FavoriteButton product={product} />
			</div>
		</div>
	)
}
