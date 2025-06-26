import { authService } from '@/services/auth/auth.service'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export const useLogout = () => {
	const route = useNavigate()

	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => route('/auth'),
	})
	return { logout }
}
