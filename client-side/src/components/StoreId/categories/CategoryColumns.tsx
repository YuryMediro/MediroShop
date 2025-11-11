import { Button } from '@/components/ui/Button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { STORE_URL } from '@/config/url.config'
import type { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, ExternalLink, MoreHorizontal, Pencil } from 'lucide-react'
import { Link } from 'react-router-dom'

export interface ICategoryColumn {
	id: string
	createdAt: string
	title: string
	storeId: string
}

export const categoryColumns: ColumnDef<ICategoryColumn>[] = [
	{
		accessorKey: 'title',
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
					<Link to={`/category/${row.original.id}`} target='_blank'>
						<DropdownMenuItem className='cursor-pointer'>
							<ExternalLink className='size-4 mr-2' />
							Страница с категориями
						</DropdownMenuItem>
					</Link>
					<Link
						to={STORE_URL.categoryEdit(row.original.storeId, row.original.id)}
					>
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
