import { createFileRoute } from '@tanstack/react-router'

type PageParams = {
	page: number
}

export const Route = createFileRoute('/todo/$todoid')({
	component: ToDoItem,
	validateSearch: (search: Record<string, unknown>): PageParams => {
		return {
			page: Number(search?.page ?? 1),
		}
	},
})

function ToDoItem() {
	const { todoid } = Route.useParams()
	const { page } = Route.useSearch()
	return (
		<div>
			<h1>{todoid}</h1>
			<div>Page: {page}</div>
		</div>
	)
}
