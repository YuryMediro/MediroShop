import { storeService } from '@/services/store.service'
import type { IStoreEdit } from '@/shared/types/store.interface'
import { queryClient } from '@/utils/api/queryClient'
import { useMutation, useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export default function useUpdateStore(storeId:string) {

	const { data: store } = useQuery({
		queryKey: ['store', storeId],
		queryFn: () => storeService.getById(storeId),
	})

	const { mutate: updateStore, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['update store'],
		mutationFn: (data: IStoreEdit) => storeService.update(data, storeId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['profile'],
			})
			queryClient.invalidateQueries({
				queryKey: ['store', storeId],
			})
			toast.success('Магазин обновлен')
		},
		onError() {
			toast.error('Ошибка при обновление магазина')
		},
	})

	return { store, updateStore, isLoadingUpdate }
}
