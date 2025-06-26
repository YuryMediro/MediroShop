import { Input } from '@/components/ui/form-elements/Input'
import s from './SearchInput.module.scss'
import { Button } from '@/components/ui/Button'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchInput = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const route = useNavigate()

	return (
		<div className={s.form}>
			<Input
				placeholder='Поиск товара'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				onKeyDown={e => {
					if (e.key === 'Enter') {
						route(`/explorer?searchTerm=${searchTerm}`)
					}
				}}
			/>
			<Button
				variant='primary'
				type='submit'
				onClick={() => route(`/explorer?searchTerm=${searchTerm}`)}
			>
				<Search />
			</Button>
		</div>
	)
}
