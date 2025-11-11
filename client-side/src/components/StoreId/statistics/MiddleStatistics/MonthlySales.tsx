import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import {
	ChartContainer,
	type ChartConfig,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart'
import type { IMonthlySales } from '@/shared/types/statistics.interface'
import s from './MiddleStatistics.module.scss'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'
interface MonthlySalesProps {
	data: IMonthlySales[]
}

const chartConfig = {
	value: {
		label: 'Прибыль',
		color: '#3B82F6',
	},
} satisfies ChartConfig

export const MonthlySales = ({ data }: MonthlySalesProps) => {
	return (
		<Card>
			<CardHeader className={s.header}>
				<CardTitle>Прибыль</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer
					className='aspect-auto h-[310px] w-full'
					config={chartConfig}
				>
					<AreaChart
						accessibilityLayer
						data={data}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='date'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
						/>

						<ChartTooltip content={<ChartTooltipContent indicator='line' />} />
						<Area
							dataKey='value'
							type='natural'
							fill='var(--color-value)'
							stroke='var(--color-value)'
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
