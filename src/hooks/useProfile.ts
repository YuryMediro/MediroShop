import { userService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export const useProfile = () => {
	const { data: user, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
	})
	return { user, isLoading }
}
