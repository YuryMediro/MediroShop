import { useProfile } from '@/hooks/useProfile'
import { Catalog } from '../ui/Catalog/Catalog'
import { LoaderStatistics } from '../StoreId/statistics/MainStatistics/LoaderStatistics'

export const Favorites = () => {
	const { user } = useProfile()
	console.log(user?.favorites )

	if (!user) {
		return (
			<div className='flex justify-center h-screen'>
				<LoaderStatistics />
			</div>
		)
	}

	return (
		<div className='my-6'>
			<Catalog
				title='Избранное'
				description='Список всех ваших избранных товаров'
				products={user.favorites}
			/>
		</div>
	)
}
