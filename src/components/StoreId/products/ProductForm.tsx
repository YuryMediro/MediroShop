import type { IProduct, IProductEdit } from '@/shared/types/product.interface'
import s from '../Store.module.scss'
import type { ICategory } from '@/shared/types/category.interface'
import type { IColor } from '@/shared/types/color.interface'
import useCreateProduct from '@/hooks/products/useCreateProduct'
import { useParams } from 'react-router-dom'
import { useForm, type SubmitHandler } from 'react-hook-form'
import useUpdateProduct from '@/hooks/products/useUpdateProduct'
import useDeleteProduct from '@/hooks/products/useDeleteProduct'
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
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { ImageUpload } from '@/components/ui/imageUpload/ImageUpload'

interface CreateProductProps {
	product?: IProduct | null
	categories: ICategory[]
	colors: IColor[]
}

export const ProductForm = ({
	product,
	categories,
	colors,
}: CreateProductProps) => {
	const { storeId } = useParams()
	const { createProduct, isLoadingCreate } = useCreateProduct(storeId!)
	const { updateProduct, isLoadingUpdate } = useUpdateProduct(product?.id!)
	const { deleteProduct, isLoadingDelete } = useDeleteProduct(product?.id!, storeId!)

	const form = useForm<IProductEdit>({
		mode: 'onChange',
		values: {
			title: product?.title || '',
			description: product?.description || '',
			images: product?.images || [],
			price: product?.price || 0,
			categoryId: product?.category.id || '',
			colorId: product?.color.id || '',
		},
	})

	const onSubmit: SubmitHandler<IProductEdit> = data => {
		if (product) updateProduct(data)
		else createProduct(data)
	}
	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<div>
					<h2 className={s.title}>
						{product ? 'Изменить данные ' : 'Создать товар'}
					</h2>
					<p className={s.description}>
						{product
							? 'Изменить данные о товаре'
							: 'Добавить новый товар в магазин'}
					</p>
				</div>
				{product && (
					<ConfirmModal handleClick={() => deleteProduct()}>
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
					<FormField
						control={form.control}
						name='images'
						rules={{
							required: 'Загрузите хотя бы одну картинку',
						}}
						render={({ field }) => (
							<FormItem className='mt-4'>
								<FormLabel>Картинки</FormLabel>
								<FormControl>
									<ImageUpload
										isDisabled={isLoadingCreate || isLoadingUpdate}
										onChange={field.onChange}
										value={field.value}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className={s.fields}>
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
												placeholder='Название товара'
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
						<FormField
							control={form.control}
							name='price'
							rules={{
								required: 'Цена обязательно',
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Цена (руб.)</FormLabel>
									<FormControl>
										<div>
											<Input
												type='price'
												placeholder='Цена товара'
												disabled={isLoadingCreate || isLoadingUpdate}
												{...field}
												onChange={e => field.onChange(+e.target.value)}
											/>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className={s.fields}>
						<FormField
							control={form.control}
							name='categoryId'
							rules={{
								required: 'Категория обязательно',
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Категория</FormLabel>
									<Select
										disabled={isLoadingCreate || isLoadingUpdate}
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<SelectTrigger className='w-[180px]'>
											<SelectValue placeholder='Категория товара' />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												{categories.map(category => (
													<SelectItem key={category.id} value={category.id}>
														{category.title}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className={s.fields}>
						<FormField
							control={form.control}
							name='colorId'
							rules={{
								required: 'Цвет обязателен',
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Цвет</FormLabel>
									<Select
										disabled={isLoadingCreate || isLoadingUpdate}
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<SelectTrigger className='w-[180px]'>
											<SelectValue placeholder='Цвет товара' />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												{colors.map(color => (
													<SelectItem key={color.id} value={color.id}>
														{color.name}
													</SelectItem>
												))}
											</SelectGroup>
										</SelectContent>
									</Select>
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
						}}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Описание</FormLabel>
								<FormControl>
									<Textarea
										placeholder='Описание товара'
										disabled={isLoadingUpdate || isLoadingCreate}
										{...field}
									/>
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
						{product ? 'Изменить' : 'Создать '}
					</Button>
				</form>
			</Form>
		</div>
	)
}
