import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'
import { ways } from './data'

export default function App() {
	let content = 'Нажми на кнопку'

	console.log('App Component Render')

	function handleCLick(type) {
		console.log('button clicked', type)
		content = type
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

					<p>{content}</p>
				</section>
			</main>
		</div>
	)
}
