import { storeService } from '@/services/store.service'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function useDeleteStore(storeId: string) {
	const route = useNavigate()

	const { mutate: deleteStore, isPending: isLoadingDelete } = useMutation({
		mutationKey: ['delete store'],
		mutationFn: () => storeService.delete(storeId),
		onSuccess() {
			toast.success('Магазин удален')
			route('/')
		},
		onError() {
			toast.error('Ошибка при удаление магазина')
		},
	})

	return { deleteStore, isLoadingDelete }
}
