import { useState, useEffect } from 'react'
import logo from '/public/logo-name.svg'
import  './Header.css'

export default function Header() {
	const [time, setTime] = useState(new Date().toLocaleTimeString())

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString())
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<header>
			<img src={logo} alt={'Result'} />
			<h3>AzETQ</h3>
			<span>Clock: {time}</span>
		</header>
	)
}
