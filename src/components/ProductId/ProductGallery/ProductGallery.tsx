import type { IProduct } from '@/shared/types/product.interface'
import s from './ProductGallery.module.scss'
import { useState } from 'react'
import { cn } from '@/shared/lib/utils'

interface ProductGalleryProps {
	product: IProduct
}

export const ProductGallery = ({ product }: ProductGalleryProps) => {
	const [currentImage, setCurrentImage] = useState(0)
	return (
		<div>
			<img
				src={product.images[currentImage]}
				alt={product.title}
				width={500}
				height={500}
				className={s.image}
			/>
			<div className={s.gallery}>
				{product.images.map((image, index) => (
					<button
						key={index}
						onClick={() => setCurrentImage(index)}
						className={cn(s.item, { [s.active]: currentImage === index })}
					>
						<img src={image} alt={product.title} width={100} height={100} />
					</button>
				))}
			</div>
		</div>
	)
}
