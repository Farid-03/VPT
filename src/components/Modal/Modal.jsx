import './Modal.css'
import { createPortal } from 'react-dom'
import { useRef, useEffect } from 'react'

export default function Modal({ children, open }) {
	const dialog = useRef(null)

	useEffect(() => {
		const modal = dialog.current
		if (!modal) return

		if (open && !modal.open) {
			modal.showModal()
			modal.classList.add('opening')
			requestAnimationFrame(() => {
				modal.classList.add('open')
				modal.classList.remove('opening')
			})
		} else if (!open && modal.open) {
			modal.classList.remove('open')
			modal.classList.add('closing')
			setTimeout(() => {
				modal.classList.remove('closing')
				modal.close()
			}, 300)
		}
	}, [open])

	return createPortal(
		<dialog ref={dialog} className='modal'>
			{children}
		</dialog>,
		document.getElementById('modal')
	)
}
