import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserModule } from 'src/user/user.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { getJwtConfig } from 'src/config/jwt.config'
import { PrismaService } from 'src/prisma.service'
import { UserService } from 'src/user/user.service'
import { GoogleStrategy } from './strategies/google.strategy'
import { YandexStrategy } from './strategies/yandex.strategy'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
	imports: [
		UserModule,
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		})
	],
	controllers: [AuthController],
	providers: [
		AuthService,
		PrismaService,
		UserService,
		GoogleStrategy,
		YandexStrategy,
		JwtStrategy
	]
})
export class AuthModule {}
