import { Skeleton } from '@/components/ui/Skeleton'

export function Loader() {
	return (
		<div className='flex items-center space-x-4'>
			<div className='space-y-2'>
				<Skeleton className='h-4 w-[50px] md:w-[250px] bg-gray-600' />
				<Skeleton className='h-4 w-[25px] md:w-[200px]  bg-gray-600' />
			</div>
			<Skeleton className='h-12 w-12 rounded-full  bg-gray-600' />
		</div>
	)
}
