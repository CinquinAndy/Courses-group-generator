import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="mx-auto p-6 text-center text-base-content">
			<p className="text-sm font-medium">
				© {new Date().getFullYear()}{' '}
				<Link href={'https://andy-cinquin.fr'} className={'underline'}>
					Andy Cinquin
				</Link>
			</p>
			<p className="text-xs">
				Developed & Designed with ❤️ 🐝<Link href={'https://forhives.fr'}>ForHives co-founders</Link>
			</p>
		</footer>
	)
}
