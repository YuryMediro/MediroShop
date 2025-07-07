import { useState, type PropsWithChildren } from 'react'
import { Rating } from 'react-simple-star-rating'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../Dialog'
import { useCreateReviews } from '@/hooks/reviews/useCreateReviews'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type { IReviewInput } from '@/shared/types/review.interface'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../form-elements/Form'
import { Textarea } from '../textarea'
import { Button } from '../Button'

interface ReviewModalProps {
	storeId: string
}

export default function ReviewModal({
	children,
	storeId,
}: PropsWithChildren<ReviewModalProps>) {
	const [isOpen, setIsOpen] = useState(false)

	const { createReview, isLoadingCreate } = useCreateReviews(storeId)
	console.log(createReview)
	const form = useForm<IReviewInput>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IReviewInput> = data => {
		createReview(data)
		form.reset()
		setIsOpen(false)
	}

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Создание отзыва</DialogTitle>
					<DialogDescription>
						Для создания отзыва необходимо указать рейтинг и текст.
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
						<FormField
							control={form.control}
							name='rating'
							rules={{ required: 'Рейтинг обязателен' }}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Rating
											onClick={field.onChange}
											initialValue={field.value}
											SVGstyle={{
												display: 'inline-block',
											}}
											size={25}
											transition
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='text'
							rules={{
								required: 'Текст обязателен',
								validate: {
									notOnlyWhitespace: value =>
										value.trim().length > 0 ||
										'Отзыв не должно состоять только из пробелов',
								},
							}}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Текст</FormLabel>
									<FormControl>
										<Textarea
											{...field}
											placeholder='Текст отзыва'
											disabled={isLoadingCreate}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className='flex justify-end'>
							<Button
								type='submit'
								variant='primary'
								disabled={isLoadingCreate}
							>
								Оставить отзыв
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
