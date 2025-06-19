import { categoryService } from '@/services/category.service'
import type { ICategoryEdit } from '@/shared/types/category.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export default function useUpdateCategories(categoryId: string) {
	const queryClient = useQueryClient()

	const { mutate: updateCategory, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update category'],
		mutationFn: (data: ICategoryEdit) =>
			categoryService.update(data, categoryId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get category for store dashboard'],
			})
			toast.success('Категория обновлена')
		},
		onError() {
			toast.error('Ошибка при обновление категории')
		},
	})

	return { updateCategory, isLoadingUpdate }
}
