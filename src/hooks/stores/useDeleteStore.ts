import { storeService } from '@/services/store.service'
import { useMutation } from '@tanstack/react-query'
import { useNavigate, useParams } from '@tanstack/react-router'
import toast from 'react-hot-toast'

export default function useDeleteStore() {
	const route = useNavigate()
	const { storeId } = useParams({ from: '/store/$storeId' })

	const { mutate: deleteStore, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete store'],
		mutationFn: () => storeService.delete(storeId),
		onSuccess() {
			toast.success('Магазин удален')
			route({ to: '/' })
		},
		onError() {
			toast.error('Ошибка при удаление магазина')
		},
	})

	return { deleteStore, isLoadingDelete }
}
