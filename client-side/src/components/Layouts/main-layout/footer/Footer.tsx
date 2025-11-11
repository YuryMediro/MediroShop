import s from './Footer.module.scss'
export const Footer = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.footer}>
				<a
					href='https://github.com/YuryMediro'
					target='_blank'
					rel='noreferrer'
				>
					<span>MediroShop</span> &copy; 2025 Все права защищены
				</a>
			</div>
		</div>
	)
}
