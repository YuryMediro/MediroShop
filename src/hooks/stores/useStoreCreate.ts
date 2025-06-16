import { storeService } from '@/services/store.service'
import type { IStoreCreate } from '@/shared/types/store.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export function useCreateStore() {
	const route = useNavigate()

	const queryClient = useQueryClient()

	const { mutate: createStore, isPending: isLoadingStore } = useMutation({
		mutationKey: ['create store'],
		mutationFn: (data: IStoreCreate) => storeService.create(data),
		onSuccess(store) {
			queryClient.invalidateQueries({
				queryKey: ['profile'],
			})
			toast.success('Магазин создан')
			route(`/store/${store.id}`)
		},
		onError() {
			toast.error('Ошибка при создании магазина')
		},
	})

	return { createStore, isLoadingStore }
}
