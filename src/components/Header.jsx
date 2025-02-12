import logo from '/public/logo-name.svg'

export default function Header() {
	const now = new Date()
	return (
		<header>
			<img src={logo} alt={'Result'} />
			<h3>AzETQ</h3>
			<span>Clock : {now.toLocaleTimeString()}</span>
		</header>
	)
}
