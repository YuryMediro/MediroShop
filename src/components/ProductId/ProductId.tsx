import useGetByIdProduct from '@/hooks/products/useGetByIdProduct'
import { ProductInfo } from './ProductInfo/ProductInfo'
import { LoaderStatistics } from '../StoreId/statistics/MainStatistics/LoaderStatistics'
import s from './ProductId.module.scss'
import { ProductGallery } from './ProductGallery/ProductGallery'

export const ProductId = () => {
	const { product } = useGetByIdProduct()

	if (!product) {
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
		</div>
	)
}
