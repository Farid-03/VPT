import Header from './components/Header/Header'
import TeachingSection from './components/TeachingSection'
import DifferencesSection from './components/DifferencesSection'
import IntroSection from './components/IntroSection'
import TabSection from './components/TabSection'
import FeedBackSection from './components/FeedBackSection'
import { useState } from 'react'
import EffectSection from './components/EffectSection'

export default function App() {
	const [visible, setVisible] = useState(true)
	const [tab, setTab] = useState('effect')

	// setTimeout(() => {
	// 	setVisible(false)
	// }, 3000)
	return (
		<>
			{' '}
			{visible && <Header />}{' '}
			<main>
				<IntroSection />
				<TabSection active={tab} onChange={current => setTab(current)} />{' '}
				{tab === 'main' && (
					<>
						{' '}
						<TeachingSection /> <DifferencesSection />
					</>
				)}
				{tab === 'feedback' && (
					<>
						{' '}
						<FeedBackSection />{' '}
					</>
				)}
				{tab === 'effect' && (
					<>
						{' '}
						<EffectSection />{' '}
					</>
				)}
			</main>
		</>
	)
}
