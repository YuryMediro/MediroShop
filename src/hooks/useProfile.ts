import { userService } from '@/services/user.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export const useProfile = () => {
	const { data: user, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
	})
	return { user, isLoading }
}

export const useToggleFavorite = (productId: string) => {
	const queryClient = useQueryClient()
	const { mutate: toggleFavorite, isPending } = useMutation({
		mutationKey: ['toggle favorite'],
		mutationFn: () => userService.toggleFavorite(productId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['profile'],
			})
			toast.success('Список избранных изменен!')
		},
		onError() {
			toast.error('Ошибка при изменении списка избранных')
		},
	})
	return { toggleFavorite, isPending }
}
