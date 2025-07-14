import s from './Auth.module.scss'
import auth from '@assets/auth.svg'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/Card'
import { Form } from '../ui/form-elements/Form'
import { useState } from 'react'
import { useAuthForm } from '@/hooks/useAuthForm'
import { Button } from '@components/ui/Button'
import { AuthFields } from './AuthFields'
import { SocialAuth } from './SocialAuth'

interface AuthProps {}

export const Auth = ({}: AuthProps) => {
	const [isReg, setIsReg] = useState(false)

	const { onSubmit, form, isPending } = useAuthForm(isReg)

	return (
		<div className={s.wrapper}>
			<section className={s.left}>
				<img src={auth} alt='MediroShop auth' width={100} height={100} />
			</section>
			<section className={s.right}>
				<Card className={s.card}>
					<CardHeader className={s.header}>
						<CardTitle className={s.title}>
							{isReg ? 'Создать аккаунт' : 'Войти в аккаунт'}
						</CardTitle>
						<CardDescription className={s.description}>
							Войдите или создайте учетную запись, чтобы оформлять покупки!
						</CardDescription>
					</CardHeader>
					<CardContent className={s.content}>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<AuthFields form={form} isPending={isPending} isReg={isReg} />
								<Button type='submit' disabled={isPending}>
									Продолжить
								</Button>
							</form>
						</Form>
						<SocialAuth />
					</CardContent>
					<CardFooter className={s.footer}>
						{isReg ? 'Уже есть аккаунт?' : 'Еще нет аккаунта?'}
						<button type='button' onClick={() => setIsReg(!isReg)}>
							{isReg ? 'Войти' : 'Создать'}
						</button>
					</CardFooter>
				</Card>
			</section>
		</div>
	)
}
