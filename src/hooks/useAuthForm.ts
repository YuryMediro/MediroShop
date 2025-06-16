import { authService } from '@/services/auth/auth.service'
import type { IAuthForm } from '@/shared/types/auth.interface'
import { useMutation } from '@tanstack/react-query'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export function useAuthForm(isReg: boolean) {
	 const navigate = useNavigate()
	const form = useForm<IAuthForm>({
		mode: 'onChange',
	})

	const { mutate, isPending } = useMutation({
		mutationKey: ['auth user'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isReg ? 'register' : 'login', data),
		onSuccess() {
			form.reset()
			toast.success('Успешная авторизация')
			navigate('/dashboard')
		},
		onError(error) {
			if (error.message) {
				toast.error(error.message)
			} else {
				toast.error('Ошибка при авторизации')
			}
		},
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return { onSubmit, form, isPending }
}
