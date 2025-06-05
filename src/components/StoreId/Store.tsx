import { useParams } from '@tanstack/react-router'
import StoreLayout from '../Layouts/store-layout/StoreLayout'

interface StoreProps {}

export const Store = ({}: StoreProps) => {
	const { storeId } = useParams({ from: '/store/$storeId' })
	return <StoreLayout>Store id: {storeId}</StoreLayout>
}
