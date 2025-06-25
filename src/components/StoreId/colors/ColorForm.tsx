import s from '../Store.module.scss'
import { useParams } from 'react-router-dom'
import { useForm, type SubmitHandler } from 'react-hook-form'
import ConfirmModal from '@/components/ui/modals/ConfirmModal'
import { Button } from '@/components/ui/Button'
import { Trash2 } from 'lucide-react'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form-elements/Form'
import { Input } from '@/components/ui/form-elements/Input'
import useCreateColor from '@/hooks/colors/useCreateColor'
import useUpdateColor from '@/hooks/colors/useUpdateColor'
import useDeleteColor from '@/hooks/colors/useDeleteColor'
import type { IColor, IColorEdit } from '@/shared/types/color.interface'

interface CreateColorProps {
	color?: IColor
}

export const ColorForm = ({ color }: CreateColorProps) => {
	const { storeId } = useParams()
	const { createColor, isLoadingCreate } = useCreateColor(storeId!)
	const { updateColor, isLoadingUpdate } = useUpdateColor(color?.id!)
	const { deleteColor, isLoadingDelete } = useDeleteColor(color?.id!, storeId!)

	const form = useForm<IColorEdit>({
		mode: 'onChange',
		values: {
			value: color?.value || '',
			name: color?.name || '',
		},
	})

	const onSubmit: SubmitHandler<IColorEdit> = data => {
		if (color) updateColor(data)
		else createColor(data)
	}
	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<div>
					<h2 className={s.title}>
						{color ? 'Изменить данные ' : 'Создать цвет'}
					</h2>
					<p className={s.description}>
						{color
							? 'Изменить данные о цвете'
							: 'Добавить новый цвет в магазин'}
					</p>
				</div>
				{color && (
					<ConfirmModal handleClick={() => deleteColor()}>
						<Button
							type='submit'
							size='icon'
							variant='primary'
							disabled={isLoadingDelete}
						>
							<Trash2 className='size-4' />
						</Button>
					</ConfirmModal>
				)}
			</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className={s.fields}>
						<FormField
							control={form.control}
							name='name'
							rules={{
								required: 'Название обязательно',
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Название цвета</FormLabel>
									<FormControl>
										<div>
											<Input
												placeholder='Название цвета'
												type='name'
												disabled={isLoadingCreate || isLoadingUpdate}
												{...field}
											/>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='value'
							rules={{
								required: 'Значение обязательно',
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Значение</FormLabel>
									<FormControl>
										<div>
											<Input
												type='color'
												placeholder='Значение товара'
												disabled={isLoadingCreate || isLoadingUpdate}
												{...field}
											/>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button
						type='submit'
						variant='primary'
						disabled={isLoadingCreate || isLoadingUpdate}
					>
						{color ? 'Изменить' : 'Создать '}
					</Button>
				</form>
			</Form>
		</div>
	)
}
