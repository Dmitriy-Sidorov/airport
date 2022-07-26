import classes from './Dropdown.module.css'
import React from 'react'
import { IAirport } from '../models/models'
import { useNavigate } from 'react-router-dom'

interface DropdownProps {
	results: IAirport[]
}

export function Dropdown({ results }: DropdownProps) {
	const navigate = useNavigate()

	return (
		<ul className={ classes.dropdown }>
			{
				results.length === 0 &&
				<li className={classes.dropdown__item}>No results!</li>
			}

			{
				results.map(airport => (
					<li
						key={ airport.id }
						onClick={ () => navigate(`/airport/${ airport.id }`) }
						className={classes.dropdown__item}
					>{ airport.name }</li>
				))
			}
		</ul>
	)
}