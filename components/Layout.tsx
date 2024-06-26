import Head from 'next/head'
import { ReactNode, useEffect } from 'react'
// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from './Footer'
import Navbar from './Navbar'
import Script from 'next/script'

type Props = {
	children: ReactNode
}

export default function Layout({ children }: Props) {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<div className="md:container md:mx-auto md:px-4">
			<Head>
				<title>Générateur de groupe</title>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="Génération aléatoire de groupe de classe"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<Script
				async
				src="https://umami.wadefade.fr/script.js"
				strategy={'afterInteractive'}
				data-website-id="9c5eeab0-620b-4063-8948-c8646b72df14"
			></Script>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
