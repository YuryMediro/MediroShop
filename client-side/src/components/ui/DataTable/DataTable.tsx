import { useState } from 'react'
import s from './DataTable.module.scss'
import {
	type ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
	type SortingState,
	getSortedRowModel,
	type ColumnFiltersState,
	getFilteredRowModel,
	getPaginationRowModel,
} from '@tanstack/react-table'

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@components/ui/table'
import { Input } from '../form-elements/Input'
import { Button } from '../Button'
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from 'lucide-react'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../select'

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[]
	data: TData[]
	filterKey?: string
}

export function DataTable<TData, TValue>({
	columns,
	data,
	filterKey,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = useState<SortingState>([])

	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		state: {
			sorting,
			columnFilters,
		},
	})

	return (
		<div>
			{filterKey && (
				<div className={s.search}>
					<Input
						placeholder='Поиск'
						value={
							(table.getColumn(filterKey)?.getFilterValue() as string) ?? ''
						}
						onChange={event =>
							table.getColumn(filterKey)?.setFilterValue(event.target.value)
						}
						className='max-w-sm'
					/>
				</div>
			)}
			<div className={s.table}>
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map(headerGroup => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map(header => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
													)}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map(row => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
								>
									{row.getVisibleCells().map(cell => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className='h-24 text-center'
								>
									Ничего не найдено.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className='flex items-center space-x-6 lg:space-x-8 justify-end py-4'>
				<div className='flex items-center space-x-2'>
					<p className='text-sm font-medium'>Строк на странице</p>
					<Select
						value={`${table.getState().pagination.pageSize}`}
						onValueChange={value => {
							table.setPageSize(Number(value))
						}}
					>
						<SelectTrigger className='h-8 w-[70px]'>
							<SelectValue placeholder={table.getState().pagination.pageSize} />
						</SelectTrigger>
						<SelectContent side='top'>
							{[10, 20, 25, 30, 40, 50].map(pageSize => (
								<SelectItem key={pageSize} value={`${pageSize}`}>
									{pageSize}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div className='flex w-[130px] items-center justify-center text-sm font-medium'>
					Страница {table.getState().pagination.pageIndex + 1} из{' '}
					{table.getPageCount()}
				</div>
				<div className='flex items-center space-x-2'>
					<Button
						variant='outline'
						size='icon'
						className='hidden size-8 lg:flex'
						onClick={() => table.setPageIndex(0)}
						disabled={!table.getCanPreviousPage()}
					>
						<span className='sr-only'>Перейти на первую страницу</span>
						<ChevronsLeft />
					</Button>
					<Button
						variant='outline'
						size='icon'
						className='size-8'
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						<span className='sr-only'>Перейти на предыдущую страницу</span>
						<ChevronLeft />
					</Button>
					<Button
						variant='outline'
						size='icon'
						className='size-8'
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						<span className='sr-only'>
							Перейти на следующую страницуПерейти на следующую страницу
						</span>
						<ChevronRight />
					</Button>
					<Button
						variant='outline'
						size='icon'
						className='hidden size-8 lg:flex'
						onClick={() => table.setPageIndex(table.getPageCount() - 1)}
						disabled={!table.getCanNextPage()}
					>
						<span className='sr-only'>Перейти на последнюю страницу</span>
						<ChevronsRight />
					</Button>
				</div>
			</div>
		</div>
	)
}
