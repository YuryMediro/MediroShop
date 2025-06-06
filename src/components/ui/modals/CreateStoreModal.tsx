import { useCreateStore } from '@/hooks/useStoreCreate'
import type { IStoreCreate } from '@/shared/types/store.interface'
import { useState, type PropsWithChildren } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../Dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../form-elements/Form'
import { Input } from '../form-elements/Input'
import { Button } from '../Button'

export default function CreateStoreModal({
	children,
}: PropsWithChildren<unknown>) {
	const [isOpen, setIsOpen] = useState(false)

	const { createStore, isLoadingStore } = useCreateStore()

	const form = useForm<IStoreCreate>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IStoreCreate> = data => {
		createStore(data)
		setIsOpen(false)
	}

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger className='w-full'>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Создание магазина</DialogTitle>
					<DialogDescription>
						Для создания магазина необходимо указать название
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
						<FormField
							control={form.control}
							name='title'
							rules={{
								required: 'Название обязательно',
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Название</FormLabel>
									<FormControl>
										<div>
											<Input
												placeholder='Название магазина'
												type='title'
												disabled={isLoadingStore}
												{...field}
											/>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className='flex justify-end'>
							<Button variant='primary' disabled={isLoadingStore} type='submit'>
								Создать магазин
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
