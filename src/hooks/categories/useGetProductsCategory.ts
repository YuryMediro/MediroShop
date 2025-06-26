import { categoryService } from '@/services/category.service'
import { productService } from '@/services/product.service'
import type { ICategory } from '@/shared/types/category.interface'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

export const useGetProductsByCategory = () => {
	const { categoryId } = useParams<{ categoryId: string }>()

	if (!categoryId) {
		throw new Error('categoryId не найден ')
	}
	const { data: products } = useQuery({
		queryKey: ['get category ByCategory'],
		queryFn: () => productService.getByCategory(categoryId),
	})

	return { products }
}
export const useGetCategoryById = () => {
	const { categoryId } = useParams<{ categoryId: string }>()

	if (!categoryId) {
		throw new Error('categoryId не найден ')
	}
	const { data: category } = useQuery<ICategory>({
		queryKey: ['get category ById', categoryId],
		queryFn: () => categoryService.getById(categoryId),
	})

	return { category }
}
