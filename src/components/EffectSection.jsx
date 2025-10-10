import { useState } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'
export default function EffectSection() {
	function openModal() {}

	const [modal, setModal] = useState(false)

	function openModal() {
		setModal(true)
	}

	return (
		<section>
			<h3>Effects</h3>

			<Button onClick={openModal}>Открыть информацию</Button>

			<Modal open={modal}>
				<h3>Hello from modal!</h3>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.{' '}
				</p>
				<Button onClick={() => setModal(false)}>Close</Button>
			</Modal>
		</section>
	)
}
