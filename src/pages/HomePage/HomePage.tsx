import { Link } from '@tanstack/react-router'

interface HomePageProps {}

export const HomePage = ({}: HomePageProps) => {
	return (
		<>
			<div>Главная страница</div>
			<div>
				<Link to='/auth'>Auth</Link>
			</div>
			<div>
				<Link to='/dashboard'>Dashboard</Link>
			</div>
		</>
	)
}
