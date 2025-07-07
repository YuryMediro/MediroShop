import s from '../Store.module.scss'
import type {
	ICategory,
	ICategoryEdit,
} from '@/shared/types/category.interface'
import { useParams } from 'react-router-dom'
import { useForm, type SubmitHandler } from 'react-hook-form'
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
import useCreateCategories from '@/hooks/categories/useCreateCategories'
import useDeleteCategory from '@/hooks/categories/useDeleteCategories'
import useUpdateCategories from '@/hooks/categories/useUpdateCategories'
import ConfirmModal from '@/components/ui/modals/ConfirmModal'
import { Textarea } from '@/components/ui/textarea'

interface CreateCategoryProps {
	category?: ICategory | null
}

export const CategoryForm = ({ category }: CreateCategoryProps) => {
	const { storeId, categoryId } = useParams()
	const { createCategory, isLoadingCreate } = useCreateCategories(storeId!)
	const { updateCategory, isLoadingUpdate } = useUpdateCategories(categoryId!)
	const { deleteCategory, isLoadingDelete } = useDeleteCategory(
		categoryId!,
		storeId!
	)

	const form = useForm<ICategoryEdit>({
		mode: 'onChange',
		values: {
			title: category?.title || '',
			description: category?.description || '',
		},
	})

	const onSubmit: SubmitHandler<ICategoryEdit> = data => {
		if (category) updateCategory(data)
		else createCategory(data)
	}
	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<div>
					<h2 className={s.title}>
						{category ? 'Изменить данные ' : 'Создать категорию'}
					</h2>
					<p className={s.description}>
						{category
							? 'Изменить данные о категории'
							: 'Добавить новую категорию в магазин'}
					</p>
				</div>
				{category && (
					<ConfirmModal handleClick={() => deleteCategory()}>
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
										<div>
											<Input
												placeholder='Название категории'
												type='title'
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

					<FormField
						control={form.control}
						name='description'
						rules={{
							required: 'Описание обязательно',
							validate: {
								notOnlyWhitespace: value =>
									value.trim().length > 0 ||
									'Описание не должно состоять только из пробелов',
							},
						}}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Описание</FormLabel>
								<FormControl>
									<div>
										<Textarea
											placeholder='Описание категории'
											disabled={isLoadingCreate || isLoadingUpdate}
											{...field}
										/>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type='submit'
						variant='primary'
						disabled={isLoadingCreate || isLoadingUpdate}
					>
						{category ? 'Изменить' : 'Создать '}
					</Button>
				</form>
			</Form>
		</div>
	)
}
