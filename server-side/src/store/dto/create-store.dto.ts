import { IsString } from 'class-validator'

export class CreateStoreDto {
	@IsString({
		message: 'Название обязательно'
	})
	title: string
}
