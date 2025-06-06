import { useProfile } from '@/hooks/useProfile'
import { MobileSidebar } from '../sidebar/MobileSidebar'
import s from './Header.module.scss'
import { Link } from '@tanstack/react-router'
import { Loader } from './Loader'
import noImage from '@assets/no-user-image.png'
import { StoreSwitcher } from './StoreSwitcher'

export const Header = () => {
	const { user, isLoading } = useProfile()
	return (
		<div className={s.header}>
			<MobileSidebar />
			<div className={s.user}>
				{isLoading ? (
					<Loader />
				) : (
					user && (
						<>
							<StoreSwitcher items={user.stores} />
							<Link to='/dashboard' className={s.link}>
								<p>{user.name}</p>
								<img
									src={user.picture}
									alt={user.name}
									width={42}
									height={42}
									onError={e => {
										const target = e.target as HTMLImageElement
										target.src = noImage
									}}
								/>
							</Link>
						</>
					)
				)}
			</div>
		</div>
	)
}
