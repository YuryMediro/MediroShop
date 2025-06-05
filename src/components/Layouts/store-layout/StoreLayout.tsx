import type { PropsWithChildren } from 'react'
import s from './StoreLayout.module.scss'
import { Sidebar } from './sidebar/Sidebar'
import { Header } from './header/Header'

export default function StoreLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className={s.wrapper}>
			<div className={s.layout}>
				<div className={s.sidebar}>
					<Sidebar />
				</div>
				<div className={s.header}>
					<Header />
				</div>
				<main>{children}</main>
			</div>
		</div>
	)
}
