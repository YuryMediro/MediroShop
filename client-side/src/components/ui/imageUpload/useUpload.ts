import { SERVER_URL } from '@/config/api.config'
import { fileService } from '@/services/file.service'
import { useMutation } from '@tanstack/react-query'
import { useRef, type ChangeEvent } from 'react'
import toast from 'react-hot-toast'

export default function useUpload(onChange: (value: string[]) => void) {
	const fileInputRef = useRef<HTMLInputElement>(null)

	const { mutate: uploadFiles, isPending: isUploading } = useMutation({
		mutationKey: ['upload files'],
		mutationFn: (formData: FormData) => fileService.upload(formData),
		onSuccess(data) {
			onChange(data.map(file => `${SERVER_URL}${file.url}`))
			toast.success('Файл загружен')
		},
		onError() {
			toast.error('Ошибка при загрузки фалов')
		},
	})

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = event.target.files

		if (selectedFiles) {
			const fileArray = Array.from(selectedFiles)

			const formData = new FormData()
			fileArray.forEach(file => formData.append('files', file))

			uploadFiles(formData)
		}
	}

	const handleButtonClick = () => {
		fileInputRef.current?.click()
	}
	return {
		isUploading,
		fileInputRef,
		handleFileChange,
		handleButtonClick,
	}
}
