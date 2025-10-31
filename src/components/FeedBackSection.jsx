import { useState } from 'react'
import Button from './Button/Button'

export default function FeedBackSection() {
	const [form, setForm] = useState({
		name: '',
		reason: 'help',
	})
	const [submitted, setSubmitted] = useState(false)

	function handleChange(e) {
		setForm(prev => ({ ...prev, name: e.target.value }))
	}

	function handleSubmit(e) {
		e.preventDefault()
		if (form.name.trim() === '') return
		setSubmitted(true)
	}

	if (submitted) {
		return (
			<section>
				<h3>Обратная связь</h3>
				<p>
					Спасибо, <b>{form.name}</b>! Мы скоро свяжемся с вами.
				</p>
			</section>
		)
	}

	return (
		<section>
			<h3>Обратная связь</h3>
			<form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
				<label htmlFor='name'>Ваше имя</label>
				<input
					type='text'
					id='name'
					className='control'
					value={form.name}
					onChange={handleChange}
					placeholder='Введите имя'
					style={{ border: '1px solid #ccc' }}
				/>

				<label htmlFor='reason'>Причина обращения</label>
				<select
					id='reason'
					className='control'
					value={form.reason}
					onChange={e => setForm(prev => ({ ...prev, reason: e.target.value }))}
				>
					<option value='error'>Ошибка</option>
					<option value='help'>Нужна помощь</option>
					<option value='suggest'>Предложение</option>
				</select>

				<Button
					type='submit'
					disabled={form.name.trim() === ''}
					isActive={form.name.trim() !== ''}
				>
					Отправить
				</Button>
			</form>
		</section>
	)
}
