import { useEffect, useState, useCallback } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'
import useInput from './hooks/useInput'
export default function EffectSection() {
	function openModal() {}
	 const input = useInput()
	const [modal, setModal] = useState(false)
	const [loading, setLoading] = useState(false)
	const [users, setUsers] = useState([])

	const fetchUsers = useCallback(async () => {
		setLoading(true)
		const responce = await fetch('https://jsonplaceholder.typicode.com/users')
		const users = await responce.json()
		setUsers(users)
		setLoading(false)
	}, [])

	useEffect(() => {
		fetchUsers()
	}, [])

	return (
		<section>
			<h3>Effects</h3>

			<Button style={{ marginBottom: '1rem' }} onClick={() => setModal(true)}>
				Открыть информацию
			</Button>

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

			{loading && <p>Loading ...</p>}

			{!loading && (
				<>
				<input type="text" className="control" {...input}/>
				<ul>
					{users.filter(user => user.name.toLowerCase().includes(input.value.toLowerCase())).map(user => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
				</>
			)}
		</section>
	)
}
