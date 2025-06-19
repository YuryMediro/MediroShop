import { Button } from '@/components/ui/Button'
import s from '../Store.module.scss'
import { Plus } from 'lucide-react'
import { DataTable } from '@/components/ui/DataTable/DataTable'
import { DataTableLoading } from '@/components/ui/DataTable/DataTableLoading'
import { STORE_URL } from '@/config/url.config'
import { Link, useParams } from 'react-router-dom'
import { useGetCategories } from '@/hooks/categories/useGetCategories'
import { categoryColumns, type ICategoryColumn } from './CategoryColumns'
import { formatDate } from '@/utils/date/form-date'

export const Categories = () => {
	const { storeId } = useParams()
	const { categories, isLoading } = useGetCategories(storeId!)

	const formattedCategories: ICategoryColumn[] = categories
		? categories.map(category => ({
				id: category.id,
				createdAt: formatDate(category.createdAt),
				title: category.title,
				storeId: category.storeId,
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
							<h2 className={s.title}>Категории ({categories?.length})</h2>
							<p className={s.description}>Все категории вашего магазина</p>
						</div>
						<div className={s.buttons}>
							<Link to={STORE_URL.categoryCreate(storeId)}>
								<Button variant='primary'>
									<Plus />
									Создать
								</Button>
							</Link>
						</div>
					</div>
					<div className={s.table}>
						<DataTable
							columns={categoryColumns}
							data={formattedCategories}
							filterKey='title'
						/>
					</div>
				</>
			)}
		</div>
	)
}
