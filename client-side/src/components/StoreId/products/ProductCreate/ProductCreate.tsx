import { useGetCategories } from '@/hooks/categories/useGetCategories'
import { ProductForm } from '../ProductForm'
import { useParams } from 'react-router-dom'
import { useGetColor } from '@/hooks/colors/useGetColor'

export const ProductCreate = () => {
	const { storeId } = useParams()
	const { categories } = useGetCategories(storeId!)
	const { colors } = useGetColor(storeId!)

	return <ProductForm categories={categories || []} colors={colors || []} />
}
