import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/user/decorators/user.decorator'
import { ReviewDto } from './dto/review.dto'
import { ReviewService } from './review.service'

@Controller('reviews')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@Auth()
	@Get('by-storeId/:storeId')
	async getByStoreId(@Param('storeId') storeId: string) {
		return this.reviewService.getByStoreId(storeId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Post(':productId/:storeId')
	async create(
		@CurrentUser('id') userId: string,
		@Param('productId') productId: string,
		@Param('storeId') storeId: string,
		@Body() dto: ReviewDto
	) {
		return this.reviewService.create(userId, productId, storeId, dto)
	}

	@HttpCode(200)
	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string, @CurrentUser('id') userId: string) {
		return this.reviewService.delete(id, userId)
	}
}
