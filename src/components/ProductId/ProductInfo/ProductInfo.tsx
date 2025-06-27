import type { IProduct } from '@/shared/types/product.interface'
import s from './ProductInfo.module.scss'
import { getReviewEnding } from '@/utils/review/getReviewEnding'
import { Button } from '@/components/ui/Button'

interface ProductInfoProps {
	product: IProduct
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
	const rating =
		Math.round(
			product.reviews.reduce((acc, item) => acc + item.rating, 0) /
				product.reviews.length
		) || 0

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
				<h3>
					Категория: <span>{product.category.title}</span>
				</h3>
			</div>
			<div className={s.label}>
				<h3>Средний рейтинг: </h3>
				<div className='text-sm'>
					⭐ {rating.toFixed(1)} | {getReviewEnding(product.reviews.length)}
				</div>
			</div>
			<hr />
			<div className={s.buttons}>
				<Button variant='primary'></Button>
				<Button variant='primary'></Button>
			</div>
		</div>
	)
}
