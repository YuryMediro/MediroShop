import type { IAuthForm } from '@/shared/types/auth.interface'
import type { UseFormReturn } from 'react-hook-form'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form-elements/Form'
import { Input } from '../ui/form-elements/Input'
import { validEmail } from '@/shared/regex'
import { useVisible } from '@/hooks/useVisible'
import { FaEye } from 'react-icons/fa'
import s from './Auth.module.scss'

interface AuthFieldsProps {
	form: UseFormReturn<IAuthForm, any, IAuthForm>
	isReg?: boolean
	isPending: boolean
}

export const AuthFields = ({
	form,
	isPending,
	isReg = false,
}: AuthFieldsProps) => {
	const passwordVisible = useVisible(false)
	return (
		<>
			{isReg && (
				<FormField
					control={form.control}
					name='name'
					rules={{
						required: 'Имя обязательно',
						validate: {
							notOnlyWhitespace: value =>
								value.trim().length > 0 ||
								'Имя не должен состоять только из пробелов',
						},
					}}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Имя пользователя</FormLabel>
							<FormControl>
								<Input
									placeholder='Mediro'
									type='name'
									disabled={isPending}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			)}
			<FormField
				control={form.control}
				name='email'
				rules={{
					required: 'Почта обязательна',
					pattern: { value: validEmail, message: 'Неверный формат почты' },
				}}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Почта</FormLabel>
						<FormControl>
							<Input
								placeholder='example@exmaple.com'
								type='email'
								disabled={isPending}
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name='password'
				rules={{
					required: 'Пароль обязателен',
					minLength: { value: 6, message: 'Минимум 6 символов' },
					validate: {
						notOnlyWhitespace: value =>
							value.trim().length > 0 ||
							'Пароль не должен состоять только из пробелов',
					},
				}}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Пароль</FormLabel>
						<FormControl>
							<div className={s.inputPassword}>
								<Input
									placeholder='******'
									type={passwordVisible.visible ? 'text' : 'password'}
									disabled={isPending}
									{...field}
								/>
								<FaEye
									className={s.iconEye}
									onClick={passwordVisible.handleOnClick}
								/>
							</div>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	)
}
