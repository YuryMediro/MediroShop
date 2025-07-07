import { Input } from '@/components/ui/form-elements/Input'
import s from './SearchInput.module.scss'
import { Button } from '@/components/ui/Button'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export const SearchInput = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const route = useNavigate()

	const handleSearch = () => {
		const trimSearch = searchTerm.trim()
		if (!trimSearch) {
			toast.error('Поиск не может быть пустым')
			return
		}
		route(`/explorer?searchTerm=${trimSearch}`)
	}

	return (
		<div className={s.form}>
			<Input
				placeholder='Поиск товара'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				onKeyDown={e => {
					if (e.key === 'Enter') {
						handleSearch()
					}
				}}
			/>
			<Button variant='primary' type='button' onClick={handleSearch}>
				<Search />
			</Button>
		</div>
	)
}
