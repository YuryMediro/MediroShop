import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { ColorForm } from '../ColorForm'
import { colorService } from '@/services/color.service'

export const ColorEdit = () => {
	const { colorId } = useParams()

	const { data } = useQuery({
		queryKey: ['get color'],
		queryFn: () => colorService.getById(colorId!),
	})

	return <ColorForm color={data} />
}
