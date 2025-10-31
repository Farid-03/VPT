import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import TeachingSection from './components/TeachingSection'
import DifferencesSection from './components/DifferencesSection'
import IntroSection from './components/IntroSection'
import TabSection from './components/TabSection'
import FeedBackSection from './components/FeedBackSection'
import EffectSection from './components/EffectSection'
import Footer from './components/Footer/Footer'

export default function App() {
	const [visible, setVisible] = useState(true)
	const [tab, setTab] = useState('effect')

	// Скролл вверх при смене вкладки
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [tab])

	return (
		<>
			{visible && <Header />}
			<main>
				<IntroSection />
				<TabSection active={tab} onChange={current => setTab(current)} />

				{tab === 'main' && (
					<>
						<TeachingSection />
						<DifferencesSection />
					</>
				)}

				{tab === 'feedback' && <FeedBackSection />}

				{tab === 'effect' && <EffectSection />}

				<Footer />
			</main>
		</>
	)
}
