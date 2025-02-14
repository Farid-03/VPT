import './Button.css'

export default function Button({ children, onClick }) {
	console.log('Button Component Render')

	return (
		<button className='button' onClick={onClick}>
			{children}
		</button>
	)
}
