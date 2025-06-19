import { colorService } from '@/services/color.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function useDeleteColor(colorId: string, storeId: string) {
	const route = useNavigate()

	const queryClient = useQueryClient()

	const { mutate: deleteColor, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete color'],
		mutationFn: () => colorService.delete(colorId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get colors for store dashboard'],
			})
			toast.success('Цвет удален')
			route(`/store/${storeId}/colors`)
		},
		onError() {
			toast.error('Ошибка при удаление цвета')
		},
	})

	return { deleteColor, isLoadingDelete }
}
