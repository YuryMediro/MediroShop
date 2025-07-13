import { IsInt, IsString } from "class-validator";

export class AddToCartDto {
	@IsString({
		message: 'Id пользователя обязательно'
	})
	userId: string

	@IsString({
		message: 'Id продукта обязательно'
	})
	productId: string
	
    @IsInt()
    quantity?: number

}

export class UpdateCartDto {
	@IsInt()
	quantity: number

}