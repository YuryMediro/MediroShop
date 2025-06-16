import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import { queryClient } from '@utils/api/queryClient'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '../routeTree.gen'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

// const router = createRouter({ routeTree })

// declare module '@tanstack/react-router' {
// 	interface Register {
// 		router: typeof router
// 	}
// }

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<HelmetProvider>
					<Toaster />
					<App />
					{/* <RouterProvider router={router} /> */}
				</HelmetProvider>
			</BrowserRouter>
		</QueryClientProvider>
	</StrictMode>
)
