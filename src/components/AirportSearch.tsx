import React, { useEffect, useState } from 'react'
import useInput from '../hook/useInput'
import useDebounce from '../hook/useDebounce'
import { Dropdown } from './Dropdown'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import { fetchSearchAirports } from '../store/actions/SearchAirportsActions'

export function AirportSearch() {
	const { loading, airports } = useAppSelector(state => state.search)
	const [dropdown, setDropdown] = useState(false)
	const input = useInput('')
	const dispatch = useAppDispatch()
	const debounce = useDebounce<string>(input.value, 250)

	useEffect(() => {
		if (debounce.length > 3) {
			dispatch(fetchSearchAirports(debounce, 1, 10))
			setDropdown(true)
		} else {
			setDropdown(false)
		}
	}, [debounce, dispatch])

	return (
		<div className="mb-4 relative">
			<input
				className="border px-4 py-2 w-full outline-0 h-[42px]"
				type="text"
				placeholder="Search for airport..."
				onBlur={() => setDropdown(false)}
				{...input}
			/>

			{
				(!loading && dropdown) &&
				<Dropdown results={airports}/>
			}
		</div>
	)
}