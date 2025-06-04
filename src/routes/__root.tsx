import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
	component: () => (
		<>
			{/* <div>
				<Link to='/auth'>Auth</Link>
				<Link to='/dashboard'>Dashboard</Link>
			</div> */}
			{/* <hr /> */}
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
})
