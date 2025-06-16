import { Card, CardContent } from '../Card'
import { CircleLoader } from '../LoaderCircle'
import { Skeleton } from '../Skeleton'
import s from './DataTable.module.scss'
export const DataTableLoading = () => {
	return (
		<div className={s.loading}>
			<Skeleton className={s.heading} />
			<Skeleton className={s.search} />
			<Card className={s.table}>
				<CardContent>
					<div className={s.loader}>
						<CircleLoader />
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
