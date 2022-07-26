import { ChangeEvent, useState } from 'react'

interface InputReturn {
	value: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function useInput(initialInput = ''): InputReturn {
	const [value, setValue] = useState(initialInput)

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return {
		value,
		onChange
	}
}

export default useInput