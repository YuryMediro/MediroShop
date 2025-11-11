import { colorService } from '@/services/color.service'
import type { IColorEdit } from '@/shared/types/color.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export default function useUpdateColor(colorId: string) {
	const queryClient = useQueryClient()

	const { mutate: updateColor, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update color'],
		mutationFn: (data: IColorEdit) => colorService.update(data, colorId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['get colors for store dashboard'],
			})
			toast.success('Цвет обновлен')
		},
		onError() {
			toast.error('Ошибка при обновление цвета')
		},
	})

	return { updateColor, isLoadingUpdate }
}
