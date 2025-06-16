// import { Link, useMatchRoute, useParams } from '@tanstack/react-router'
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
import { Link, useMatch, useParams } from 'react-router-dom'

interface INavItem {
	title: string
	link: string
	icon: LucideIcon
}
export const Navigation = () => {
	const { storeId } = useParams()
	// const { storeId } = useParams({ from: '/store/$storeId' })
	// const matchRoute = useMatchRoute()
	const matchRoute = useMatch({ path: '/store/:storeId/*' })
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
				{/* <Link to={`/store/${storeId}/settings`}> Settings</Link> */}
				{routes.map(route => {
					// const isActive = matchRoute({
					// 	to: route.link.replace(storeId, '$storeId'),
					// 	params: { storeId },
					// })
					const isActive = matchRoute?.pathname === route.link
					return (
						<Link
							to={route.link}
							// params={{ storeId }}
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
