import { ImagePlus } from 'lucide-react'
import { Button } from '../Button'
import s from './ImageUpload.module.scss'
import useUpload from './useUpload'
import { cn } from '@/shared/lib/utils'

interface ImageUploadProps {
	isDisabled: boolean
	onChange: (value: string[]) => void
	value: string[]
}

export const ImageUpload = ({
	isDisabled,
	onChange,
	value,
}: ImageUploadProps) => {
	const { fileInputRef, handleButtonClick, handleFileChange, isUploading } =
		useUpload(onChange)
	return (
		<div>
			<div className={s.imageContainer}>
				{value.map(url => (
					<div key={url} className={s.imageWrapper}>
						<img src={url} alt='Картинка' />
					</div>
				))}
			</div>
			<Button
				type='button'
				disabled={isDisabled || isUploading}
				variant='secondary'
				onClick={handleButtonClick}
				className={cn(s.upload, { 'mt-4': value.length })}
			>
				<ImagePlus />
				Загрузить картинки
			</Button>
			<input
				type='file'
				multiple
				className='hidden'
				ref={fileInputRef}
				onChange={handleFileChange}
				disabled={isDisabled}
			/>
		</div>
	)
}
