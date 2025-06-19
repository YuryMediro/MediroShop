import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { CategoryForm } from '../CategoryForm'
import { categoryService } from '@/services/category.service'

export const CategoryEdit = () => {
	const { categoryId } = useParams()

	const { data } = useQuery({
		queryKey: ['get category'],
		queryFn: () => categoryService.getById(categoryId!),
	})

	return <CategoryForm category={data} />
}
