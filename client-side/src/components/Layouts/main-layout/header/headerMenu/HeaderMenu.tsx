import { Button } from '@/components/ui/Button'
import { Cart } from './Cart/Cart'
import s from './HeaderMenu.module.scss'
import { useProfile } from '@/hooks/useProfile'
import { Loader } from '@/components/Layouts/store-layout/header/Loader'
import { Link } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import CreateStoreModal from '@/components/ui/modals/CreateStoreModal'
import noImage from '@assets/no-user-image.png'

export const HeaderMenu = () => {
	const { user, isLoading } = useProfile()

	return (
		<>
			<div className={s.wrapper}>
				<Cart />
				<Link to='/explorer'>
					<Button variant='ghost'>Каталог</Button>
				</Link>
				{isLoading ? (
					<Loader />
				) : user ? (
					<>
						<Link to='/favorites'>
							<Button variant='ghost'>
								Избранное ({user.favorites.length})
							</Button>
						</Link>
						{user.stores.length ? (
							<Link to={`/store/${user.stores[0].id}`}>
								<Button variant='ghost'>Мои магазины</Button>
							</Link>
						) : (
							<CreateStoreModal>
								<Button variant='ghost'>Создать магазин</Button>
							</CreateStoreModal>
						)}
						<Link to='/dashboard'>
							<img
								className={s.avatar}
								src={user.picture}
								alt={user.name}
								onError={e => {
									const target = e.target as HTMLImageElement
									target.src = noImage
								}}
							/>
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
			</div>
		</>
	)
}
