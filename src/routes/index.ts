import { HomePage } from '@/pages/HomePage/HomePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: HomePage,
})

