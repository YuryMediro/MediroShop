import { categoryService } from '@/services/category.service'
import type { ICategoryEdit } from '@/shared/types/category.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function useCreateCategories(storeId: string) {
	const route = useNavigate()

	const queryClient = useQueryClient()

	const { mutate: createCategory, isPending: isLoadingCreate } = useMutation({
        mutationKey: ['create category'],
        mutationFn: (data: ICategoryEdit) => categoryService.create(data, storeId),
        onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get category for store dashboard'],
			})
			toast.success('Категория создана')
			route(`/store/${storeId}/categories`)
		},
		onError() {
			toast.error('Ошибка при создании категории')
		},
    })
	return { createCategory, isLoadingCreate }
}
