import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App'
import { queryClient } from '@utils/api/queryClient'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<Toaster />
			<App />
		</QueryClientProvider>
	</StrictMode>
)
