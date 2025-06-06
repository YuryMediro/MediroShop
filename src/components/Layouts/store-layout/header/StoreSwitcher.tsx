import { Button } from '@/components/ui/Button'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from '@/components/ui/command'
import CreateStoreModal from '@/components/ui/modals/CreateStoreModal'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import type { IStore } from '@/shared/types/store.interface'
import { useNavigate } from '@tanstack/react-router'
import { ChevronsUpDown, Plus, StoreIcon } from 'lucide-react'
import { useState } from 'react'

interface StoreSwitcherProps {
	items: IStore[]
}

export const StoreSwitcher = ({ items }: StoreSwitcherProps) => {
	const route = useNavigate()

	const [isOpen, setIsOpen] = useState(false)

	const storeSelect = (store: IStore) => {
		setIsOpen(false)
		route({ to: '/store/$storeId', params: { storeId: store.id } })
	}

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger>
				<Button
					variant='outline'
					size='sm'
					role='combobox'
					type='button'
					aria-expanded={isOpen}
					aria-label='Выберете магазин'
					className='w-52'
				>
					<StoreIcon className='mr-2 size-4' />
					Текущий магазин
					<ChevronsUpDown className='ml-auto size-4 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-52 p-0'>
				<Command>
					<CommandList>
						<CommandInput placeholder='Найти магазин...' />
						<CommandEmpty>Ничего не найдено.</CommandEmpty>
						<CommandGroup heading='Магазины'>
							{items.map(store => (
								<CommandItem
									key={store.id}
									onSelect={() => storeSelect(store)}
									className='text-sm'
								>
									<StoreIcon />
									<div className='line-clamp-1'>{store.title}</div>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
					<CommandSeparator />
					<CommandList>
						<CommandGroup>
							<CreateStoreModal>
								<CommandItem>
									<Plus />
									Создать магазин
								</CommandItem>
							</CreateStoreModal>
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
