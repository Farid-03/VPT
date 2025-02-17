import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'
import { useState } from 'react'
import { ways, differences } from './data'

export default function App() {
	const [contentType, setContentType] = useState(null)

	function handleCLick(type) {
		setContentType(type)
	}

	return (
		<div>
			<Header />
			<main>
				<section>
					<h3>Наш подход к обучению</h3>
					<ul>
						<WayToTeach {...ways[0]} />
						<WayToTeach {...ways[1]} />
						<WayToTeach {...ways[2]} />
						<WayToTeach {...ways[3]} />
					</ul>
				</section>
				<section>
					<h3>Чем мы отличаемся от других</h3>
					<Button onClick={() => handleCLick('way')}>Junior</Button>
					<Button onClick={() => handleCLick('easy')}>Middle</Button>
					<Button onClick={() => handleCLick('program')}>Senior</Button>

					{/* <p>{differences[contentType]}</p> */}
					{!contentType && <p>Нажит на кнопку</p>}
					{!contentType && <p>{differences[contentType]}</p>}
				</section>
			</main>
		</div>
	)
}
