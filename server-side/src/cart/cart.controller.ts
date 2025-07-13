import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post
} from '@nestjs/common'
import { CartService } from './cart.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { AddToCartDto, UpdateCartDto } from './dto/cart.dto'
import { UserService } from 'src/user/user.service'
import { CurrentUser } from 'src/user/decorators/user.decorator'

@Controller('cart')
export class CartController {
	constructor(private readonly cartService: CartService) {}

	@Auth()
	@Post()
	async addToCart(
		@Body('productId') productId: string,
		@Body('quantity') quantity: number = 1,
		@CurrentUser('id') userId: string
	) {
		return this.cartService.addToCart({ productId, quantity, userId })
	}

	@Auth()
	@Get()
	async getCartByUserId(@CurrentUser('id') userId: string) {
		return this.cartService.getCartByUserId(userId)
	}

	@Auth()
	@Patch(':id')
	async updateCart(
		@Param('id') id: string,
		@Body() dto: UpdateCartDto,
		@CurrentUser('id') userId: string
	) {
		return this.cartService.updateCart(id, dto, userId)
	}

	@Auth()
	@Delete(':id')
	async deleteCartItem(@Param('id') id: string) {
		return this.cartService.deleteCartItem(id)
	}

	@Auth()
	@Delete('by-product/:productId')
	async deleteByProductId(@Param('productId') productId: string) {
		return this.cartService.deleteByProductId(productId)
	}

	@Auth()
	@Delete()
	async clearCart(@CurrentUser('id') userId: string) {
		return this.cartService.clearCart(userId)
	}
}
