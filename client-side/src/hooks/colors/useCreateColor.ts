import { colorService } from '@/services/color.service'
import type { IColorEdit } from '@/shared/types/color.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function useCreateColor(storeId: string) {
	const route = useNavigate()

	const queryClient = useQueryClient()

	const { mutate: createColor, isPending: isLoadingCreate } = useMutation({
		mutationKey: ['create color'],
		mutationFn: (data: IColorEdit) => colorService.create(data, storeId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get colors for store dashboard'],
			})
			toast.success('Цвет создан')
			route(`/store/${storeId}/colors`)
		},
		onError() {
			toast.error('Ошибка при создании цвета')
		},
	})
	return { createColor, isLoadingCreate }
}
