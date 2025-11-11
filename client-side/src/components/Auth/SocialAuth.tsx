import { Button } from '@components/ui/Button'
import s from './Auth.module.scss'
import { FcGoogle } from 'react-icons/fc'
import { FaYandex } from 'react-icons/fa'
import { SERVER_URL } from '@/config/api.config'

interface SocialAuthProps {}

export const SocialAuth = ({}: SocialAuthProps) => {

	const handleGoogleLogin = () => {
		window.location.href = `${SERVER_URL}/auth/google`
	}

	const handleYandexLogin = () => {
		window.location.href = `${SERVER_URL}/auth/yandex`
	}

	return (
		<div className={s.social}>
			<Button variant='outline' type='button' onClick={handleGoogleLogin}>
				<FcGoogle />
				Продолжить через Google
			</Button>

			<Button variant='outline' type='button' onClick={handleYandexLogin}>
				<FaYandex color='#FC3F1D' />
				Продолжить через Яндекс
			</Button>
		</div>
	)
}
