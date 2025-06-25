import type { PropsWithChildren } from 'react'
import s from './MainLayout.module.scss'
import { Footer } from './footer/Footer'
import { MainHeader } from './header/MainHeader'

export default function MainLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className={s.wrapper}>
			<div className={s.layout}>
				<MainHeader/>
				<div>{children}</div>
				<Footer />
			</div>
		</div>
	)
}
