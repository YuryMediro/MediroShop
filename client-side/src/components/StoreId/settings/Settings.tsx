import useUpdateStore from '@/hooks/stores/useUpdateStore'
import type { IStoreEdit } from '@/shared/types/store.interface'
import { useForm, type SubmitHandler } from 'react-hook-form'
import s from '../Store.module.scss'
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
import { Textarea } from '@/components/ui/textarea'
import { useParams } from 'react-router-dom'
import { useDeleteStore } from '@/hooks/stores/useDeleteStore'

export const Settings = () => {
	const { storeId } = useParams()
	const { store, updateStore, isLoadingUpdate } = useUpdateStore(storeId!)
	const deleteStore = useDeleteStore(storeId!)

	const form = useForm<IStoreEdit>({
		mode: 'onChange',
		values: {
			title: store?.title || '',
			description: store?.description || '',
		},
	})

	const onSubmit: SubmitHandler<IStoreEdit> = data => {
		updateStore(data)
	}
	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<div>
					<h2 className={s.title}>Настройки</h2>
					<p className={s.description}>Управление настройками магазина</p>
				</div>

				<ConfirmModal handleClick={() => deleteStore.mutate()}>
					<Button
						size='icon'
						type='button'
						variant='primary'
						disabled={deleteStore.isPending}
					>
						<Trash2 className='size-5' />
					</Button>
				</ConfirmModal>
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className={s.fields}>
						<FormField
							control={form.control}
							name='title'
							rules={{
								required: 'Название обязательно',
								validate: {
									notOnlyWhitespace: value =>
										value.trim().length > 0 ||
										'Название не должно состоять только из пробелов',
								},
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Название</FormLabel>
									<FormControl>
										<Input
											placeholder='Название магазина'
											type='text'
											disabled={isLoadingUpdate}
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name='description'
						rules={{
							validate: {
								notOnlyWhitespace: value =>
									value.trim().length > 0 ||
									'Название не должно состоять только из пробелов',
							},
						}}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Описание</FormLabel>
								<FormControl>
									<Textarea
										placeholder='Описание магазина'
										disabled={isLoadingUpdate}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button variant='primary' disabled={isLoadingUpdate} type='submit'>
						Сохранить
					</Button>
				</form>
			</Form>
		</div>
	)
}
