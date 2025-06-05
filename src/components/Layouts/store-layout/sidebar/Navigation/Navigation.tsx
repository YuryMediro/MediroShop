import { Link, useMatchRoute, useParams } from '@tanstack/react-router'
import {
	Album,
	BarChart,
	FolderKanban,
	PaintBucket,
	type LucideIcon,
	Star,
	Settings,
} from 'lucide-react'
import s from './Navigation.module.scss'
import { cn } from '@/shared/lib/utils'

interface INavItem {
	title: string
	link: string
	icon: LucideIcon
}
export const Navigation = () => {
	const { storeId } = useParams({ from: '/store/$storeId' })
	const matchRoute = useMatchRoute()

	const routes: INavItem[] = [
		{
			icon: BarChart,
			title: 'Статистика',
			link: `/store/${storeId}`,
		},
		{
			icon: FolderKanban,
			title: 'Товары',
			link: `/store/${storeId}/products`,
		},
		{
			icon: Album,
			title: 'Категории',
			link: `/store/${storeId}/categories`,
		},
		{
			icon: PaintBucket,
			title: 'Цвета',
			link: `/store/${storeId}/colors`,
		},
		{
			icon: Star,
			title: 'Отзывы',
			link: `/store/${storeId}/reviews`,
		},
		{
			icon: Settings,
			title: 'Настройки магазина',
			link: `/store/${storeId}/settings`,
		},
	]
	return (
		<div className={s.wrapper}>
			<div className={s.navigation}>
				{routes.map(route => {
					const isActive = matchRoute({
						to: route.link.replace(storeId, '$storeId'),
						params: { storeId },
					})
					return (
						<Link
							to={route.link}
							key={route.title}
							className={cn(s.route, {
								[s.active]: isActive,
							})}
						>
							<route.icon />
							{route.title}
						</Link>
					)
				})}
			</div>
		</div>
	)
}
