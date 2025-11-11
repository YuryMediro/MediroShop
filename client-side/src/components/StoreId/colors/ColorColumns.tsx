import { Button } from '@/components/ui/Button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { STORE_URL } from '@/config/url.config'
import type { IColor } from '@/shared/types/color.interface'
import type { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal, Pencil } from 'lucide-react'
import { Link } from 'react-router-dom'

export const colorColumns: ColumnDef<IColor>[] = [
	{
		accessorKey: 'name',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Название
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		},
	},
	{
		accessorKey: 'value',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Значение
					<ArrowUpDown className='ml-2 size-4' />
				</Button>
			)
		},
		cell: ({ row }) => (
			<div className='flex items-center gap-x-3'>
				{row.original.value}
				<div
					className='size-5 rounded-full border'
					style={{ backgroundColor: row.original.value }}
				/>
			</div>
		),
	},

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
		accessorKey: 'actions',
		header: 'Действия',
		cell: ({ row }) => (
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Button variant='ghost' className='h-8 w-8 p-0'>
						<MoreHorizontal />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuLabel>Действия</DropdownMenuLabel>
					<Link to={STORE_URL.colorEdit(row.original.storeId, row.original.id)}>
						<DropdownMenuItem className='cursor-pointer'>
							<Pencil className='size-4 mr-2' />
							Изменить
						</DropdownMenuItem>
					</Link>
				</DropdownMenuContent>
			</DropdownMenu>
		),
	},
]
