import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/todo/')({
	component: TodoIndex,
})

function TodoIndex() {
	return (
		<div>
			<h1>IndexToDo</h1>
			<Link to='/todo/$todoid' params={{ todoid: '1' }} search={{ page: 1 }}>
				Item1
			</Link>
		</div>
	)
}
