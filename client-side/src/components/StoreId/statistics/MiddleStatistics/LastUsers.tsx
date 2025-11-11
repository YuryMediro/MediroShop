import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import type { ILastUsers } from '@/shared/types/statistics.interface'
import s from './MiddleStatistics.module.scss'
import noImage from '@assets/no-user-image.png'

interface LastUsersProps {
	data: ILastUsers[]
}

export const LastUsers = ({ data }: LastUsersProps) => {
	return (
		<Card>
			<CardHeader className={s.header}>
				<CardTitle>Покупатели</CardTitle>
			</CardHeader>
			<CardContent>
				{data.length ? (
					data.map(user => (
						<div className={s.user} key={user.id}>
							<img
								src={user.picture}
								alt={user.name}
								width={40}
								height={40}
								onError={e => {
									const target = e.target as HTMLImageElement
									target.src = noImage
								}}
							/>
							<div className={s.info}>
								<p className={s.name}>{user.name}</p>
								<p>{user.email}</p>
							</div>
							<div className={s.total}>+{user.total.toLocaleString('ru-RU')} ₽</div>
						</div>
					))
				) : (
					<div>У этого магазина нет покупателей</div>
				)}
			</CardContent>
		</Card>
	)
}
