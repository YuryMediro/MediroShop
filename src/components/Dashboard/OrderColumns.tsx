import type { ColumnDef } from '@tanstack/react-table'
import { Button } from '../ui/Button'
import { ArrowUpDown } from 'lucide-react'

export interface IOrderColumns {
	createdAt: string
	status: string
	total: string
}

export const orderColumns: ColumnDef<IOrderColumns>[] = [
	{
		accessorKey: 'createdAt',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Дата оплаты
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		},
	},
	{
		accessorKey: 'status',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Статус
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		},
	},
	{
		accessorKey: 'total',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Сумма
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		},
	},
]
