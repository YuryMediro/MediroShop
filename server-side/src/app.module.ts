import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ColorModule } from './color/color.module';
import { CategoryModule } from './category/category.module';
import { FileModule } from './file/file.module';
import { StoreModule } from './store/store.module';
import { OrderModule } from './order/order.module';
import { StatisticsModule } from './statistics/statistics.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { CartModule } from './cart/cart.module';

@Module({
	imports: [ConfigModule.forRoot(), AuthModule, UserModule, ColorModule, CategoryModule, FileModule, StoreModule, OrderModule, StatisticsModule, ProductModule, ReviewModule, CartModule]
})
export class AppModule {}
