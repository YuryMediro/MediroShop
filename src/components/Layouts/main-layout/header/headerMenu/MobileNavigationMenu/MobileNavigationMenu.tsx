import { useProfile } from '@/hooks/useProfile'
import s from './MobileNavigationMenu.module.scss'
import { Cart } from '../Cart/Cart'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import CreateStoreModal from '@/components/ui/modals/CreateStoreModal'
import noImage from '@assets/no-user-image.png'
import { Loader } from '@/components/Layouts/store-layout/header/Loader'
import { BookHeart, BookImage, LogOut, ShoppingBag, Store } from 'lucide-react'
import { Logo } from '@/components/Layouts/LogoAndName/Logo'
import { cn } from '@/shared/lib/utils'

export const MobileNavigationMenu = () => {
	const { user, isLoading } = useProfile()
	const currentPath = window.location.pathname

	const isActive = (path: string) => currentPath === path
	return (
		<div className={s.navigationMenu}>
			<Logo />
			<div className={s.wrapper}>
				<div className={s.navigation}>
					{isLoading ? (
						<Loader />
					) : user ? (
						<>
							<Link
								to='/dashboard'
								className={cn(s.route, {
									[s.active]: isActive('/dashboard'),
								})}
							>
								<img
									className={s.avatar}
									src={user.picture}
									alt={user.name}
									onError={e => {
										const target = e.target as HTMLImageElement
										target.src = noImage
									}}
								/>
								{user.name}
							</Link>
							{user.stores.length ? (
								<Link
									to={`/store/${user.stores[0].id}`}
									className={cn(s.route, {
										[s.active]: isActive(`/store/${user.stores[0].id}`),
									})}
								>
									<Store />
									<Button variant='none'>Мои магазины</Button>
								</Link>
							) : (
								<CreateStoreModal>
									<div className={s.route}>
										<Store />
										<Button variant='none'>Создать магазин</Button>
									</div>
								</CreateStoreModal>
							)}
							<Link
								to='/favorites'
								className={cn(s.route, {
									[s.active]: isActive('/favorites'),
								})}
							>
								<BookHeart />
								<Button variant='none'>
									Избранное ({user.favorites.length})
								</Button>
							</Link>
						</>
					) : (
						<Link to={'/auth'}>
							<Button variant='primary'>
								<LogOut className={s.icon} />
								Войти
							</Button>
						</Link>
					)}
					<Link
						to='/explorer'
						className={cn(s.route, {
							[s.active]: isActive('/explorer'),
						})}
					>
						<BookImage />
						<Button variant='none'>Каталог</Button>
					</Link>
					<div className={s.route}>
						<ShoppingBag />
						<Cart />
					</div>
				</div>
			</div>
		</div>
	)
}
