import { AuthPage } from '@/pages/AuthPage/AuthPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/')({
	component: AuthPage,
})
