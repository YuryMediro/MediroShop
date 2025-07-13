import { Controller, Get, Param } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { StatisticsService } from './statistics.service'

@Controller('statistics')
export class StatisticsController {
	constructor(private readonly statisticsService: StatisticsService) {}

	@Auth()
	@Get('main/:storeId')
	async getMainStatistics(@Param('storeId') storeId: string) {
		return this.statisticsService.getMainStatistics(storeId)
	}

	@Auth()
	@Get('middle/:storeId')
	async getMiddleStatistics(@Param('storeId') storeId: string) {
		return this.statisticsService.getMiddleStatistics(storeId)
	}
}
