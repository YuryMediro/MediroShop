import type { IProduct } from '@/shared/types/product.interface'
import s from './ProductInfo.module.scss'
import { getReviewEnding } from '@/utils/review/getReviewEnding'
import { FavoriteButton } from './Buttons/FavoriteButton'
import { AddToCartButton } from './Buttons/AddToCartButton'
import { Link } from 'react-router-dom'
import { averageRating } from '@/utils/review/averageRating'

interface ProductInfoProps {
	product: IProduct
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
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
					⭐ {averageRating(product)} |{' '}
					{getReviewEnding(product.reviews.length)}
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
