import { Button } from '@/components/ui/Button'
import s from '../Store.module.scss'
import { Plus } from 'lucide-react'
import { DataTable } from '@/components/ui/DataTable/DataTable'
import { DataTableLoading } from '@/components/ui/DataTable/DataTableLoading'
import { STORE_URL } from '@/config/url.config'
import { Link, useParams } from 'react-router-dom'
import { useGetColor } from '@/hooks/colors/useGetColor'
import type { IColor } from '@/shared/types/color.interface'
import { formatDate } from '@/utils/date/form-date'
import { colorColumns } from './ColorColumns'

export const Colors = () => {
	const { storeId } = useParams()
	const { colors, isLoading } = useGetColor(storeId!)

	const formattedProducts: IColor[] = colors
		? colors.map(color => ({
				id: color.id,
				name: color.name,
				storeId: color.storeId,
				createdAt: formatDate(color.createdAt),
				value: color.value,
			}))
		: []
	return (
		<div className={s.wrapper}>
			{isLoading ? (
				<DataTableLoading />
			) : (
				<>
					<div className={s.header}>
						<div>
							<h2 className={s.title}>Цвета ({colors?.length})</h2>
							<p className={s.description}>Все цвета вашего магазина</p>
						</div>
						<div className={s.buttons}>
							<Link to={STORE_URL.colorCreate(storeId)}>
								<Button variant='primary'>
									<Plus />
									Создать
								</Button>
							</Link>
						</div>
					</div>
					<div className={s.table}>
						<DataTable
							columns={colorColumns}
							data={formattedProducts}
							filterKey='name'
						/>
					</div>
				</>
			)}
		</div>
	)
}
