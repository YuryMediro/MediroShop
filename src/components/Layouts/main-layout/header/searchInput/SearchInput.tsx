import { Input } from '@/components/ui/form-elements/Input'
import s from './SearchInput.module.scss'
import { Button } from '@/components/ui/Button'
import { Search } from 'lucide-react'

export const SearchInput = () => {
	return (
		<div className={s.form}>
			<Input placeholder='Поиск товара' />
			<Button variant='primary' type='submit'>
				<Search />
			</Button>
		</div>
	)
}
