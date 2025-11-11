import { Button } from '@/components/ui/Button'
import type { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

export interface IReviewColumn {
	id: string
	createdAt: string
	userName: string
	rating: string
}

export const reviewColumns: ColumnDef<IReviewColumn>[] = [
	{
		accessorKey: 'createdAt',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Дата создания
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		},
	},
	{
		accessorKey: 'rating',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Рейтинг
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		},
	},

	{
		accessorKey: 'userName',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Пользователь
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		},
	},
]
