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
					<Button
					 	isActive={contentType === 'way'}
						onClick={() => handleCLick('way')}>Junior
					</Button>
					<Button
					 	isActive={contentType === 'easy'}
						onClick={() => handleCLick('easy')}>Middle
					</Button>
					<Button
					 	isActive={contentType === 'program'}
						onClick={() => handleCLick('program')}>Senior
					</Button>
					
					{!contentType && <p>Нажми на кнопку</p>}
					{contentType && <p>{differences[contentType]}</p>}
				</section>
			</main>
		</div>
	)
}
