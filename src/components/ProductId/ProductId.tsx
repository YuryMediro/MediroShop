import useGetByIdProduct from '@/hooks/products/useGetByIdProduct'
import { ProductInfo } from './ProductInfo/ProductInfo'
import { LoaderStatistics } from '../StoreId/statistics/MainStatistics/LoaderStatistics'
import s from './ProductId.module.scss'
import { ProductGallery } from './ProductGallery/ProductGallery'
import { Catalog } from '../ui/Catalog/Catalog'
import { useSimilarProduct } from '@/hooks/products/useSimilarProduct'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { ProductReviews } from './ProductReviews/ProductReviews'

export const ProductId = () => {
	const { productId } = useParams<{ productId: string }>()
	const { product } = useGetByIdProduct()
	const { similarProduct } = useSimilarProduct()

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [productId])

	if (!product || !similarProduct) {
		return (
			<div className='flex justify-center h-screen '>
				<LoaderStatistics />
			</div>
		)
	}

	return (
		<div className={s.wrapper}>
			<div className={s.content}>
				<div className={s.info}>
					<ProductGallery product={product} />
					<ProductInfo product={product} />
				</div>
			</div>
			<Catalog title='Похожие товары' products={similarProduct} />
			<ProductReviews product={product} />
		</div>
	)
}
