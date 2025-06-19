import { categoryService } from '@/services/category.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function useDeleteCategory(categoryId: string, storeId: string) {
	const route = useNavigate()

	const queryClient = useQueryClient()

	const { mutate: deleteCategory, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete category'],
		mutationFn: () => categoryService.delete(categoryId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get category for store dashboard'],
			})
			toast.success('Категория удалена')
			route(`/store/${storeId}/categories`)
		},
		onError() {
			toast.error('Ошибка при удаление категории')
		},
	})

	return { deleteCategory, isLoadingDelete }
}
