// import { storeService } from '@/services/store.service'
// import { useQuery } from '@tanstack/react-query'
// import { useParams } from '@tanstack/react-router'

// export default function useGetStore() {
// 	const { storeId } = useParams({ from: '/store/$storeId' })
  
// 	const { data: stores } = useQuery({
// 		queryKey: ['get store'],
// 		queryFn: () => storeService.getById(storeId),
// 	})

// 	return { stores }
// }
