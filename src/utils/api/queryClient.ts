import { QueryClient } from '@tanstack/react-query'

// Create a client
export const queryClient = new QueryClient({
	defaultOptions: {
		//Чтобы не происходили лишнее запросы
		queries: {
			refetchOnWindowFocus:false
		},
	},
})
