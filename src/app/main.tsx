import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import { queryClient } from '@utils/api/queryClient'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<HelmetProvider>
					<Toaster />
					<App />
				</HelmetProvider>
			</BrowserRouter>
		</QueryClientProvider>
	</StrictMode>
)
