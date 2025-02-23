import Button from "./Button/Button"
import { useState } from "react"
import { differences } from "../data"


export default function DifferencesSection () {
    const [contentType, setContentType] = useState(null)

	function handleCLick(type) {
		setContentType(type)
	}
    return (
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
    )
}