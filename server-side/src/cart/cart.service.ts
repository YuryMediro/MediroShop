import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { AddToCartDto, UpdateCartDto } from './dto/cart.dto'

@Injectable()
export class CartService {
	constructor(private prisma: PrismaService) {}

	async addToCart({
		productId,
		quantity = 1,
		userId
	}: {
		productId: string
		quantity?: number
		userId: string
	}) {
		const product = await this.prisma.product.findUnique({
			where: { id: productId }
		})

		if (!product) {
			throw new Error('Продукт не найден')
		}

		const existingItem = await this.prisma.cartItem.findUnique({
			where: {
				userId_productId: {
					userId,
					productId
				}
			}
		})

		if (existingItem) {
			return this.prisma.cartItem.update({
				where: { id: existingItem.id },
				data: {
					quantity: existingItem.quantity + quantity
				}
			})
		}

		return this.prisma.cartItem.create({
			data: {
				userId,
				productId,
				price: product.price,
				quantity
			}
		})
	}

	async getCartByUserId(userId: string) {
		return this.prisma.cartItem.findMany({
			where: {
				userId
			},
			include: {
				product: true
			}
		})
	}

	async updateCart(id: string, dto: UpdateCartDto, userId: string) {
		const cartItem = await this.prisma.cartItem.findUnique({
			where: { id }
		})

		if (!cartItem) {
			throw new Error('Элемент корзины не найден')
		}

		if (cartItem.userId !== userId) {
			throw new Error('Нет доступа к этому элементу корзины')
		}

		const product = await this.prisma.product.findUnique({
			where: { id: cartItem.productId }
		})

		if (!product) {
			throw new Error('Продукт не найден')
		}

		return this.prisma.cartItem.update({
			where: { id },
			data: {
				quantity: dto.quantity,
				price: product.price
			}
		})
	}

	async deleteCartItem(id: string) {
		return this.prisma.cartItem.delete({
			where: { id }
		})
	}

	async deleteByProductId(productId: string) {
		await this.prisma.cartItem.deleteMany({
			where: { productId }
		})
	}

	async clearCart(userId: string) {
		return this.prisma.cartItem.deleteMany({
			where: { userId }
		})
	}
}
