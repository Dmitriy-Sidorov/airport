import React, { ChangeEvent, useState } from 'react'
import { useAppSelector } from '../hook/redux'
import { Spinner } from './Spinner'
import { IFilter } from '../models/models'

export function AirportFilter() {
	const { loading, types, countries, regions } = useAppSelector(state => state.handbook)
	const [filter, setFilter] = useState<IFilter>({
		type: '',
		country: '',
		region: ''
	})

	const changeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
		setFilter(prev => ({...prev, [event.target.name]: event.target.value}))
	}

	return (
		<>
			{ loading && <Spinner/> }

			<div className="border mb-2 p-2">
				<span className="mr-2">Filter</span>
				<select name="type"
				        value={filter.type}
				        onChange={changeHandler}
				        className="px-2 py-1 border mr-2">
					<option disabled className="text-gray-500">Type</option>
					{ types.map(type => (
						<option className="text-gray-500" key={ type } value={ type }>{ type }</option>
					)) }
				</select>

				<select name="country"
				        value={filter.country}
				        onChange={changeHandler}
				        className="px-2 py-1 border mr-2">
					<option disabled className="text-gray-500">Country</option>
					{ countries.map(country => (
						<option className="text-gray-500" key={ country } value={ country }>{ country }</option>
					)) }
				</select>

				<select name="region"
				        value={filter.region}
				        onChange={changeHandler}
				        className="px-2 py-1 border mr-2">
					<option disabled className="text-gray-500">Region</option>
					{ regions.map(region => (
						<option className="text-gray-500" key={ region } value={ region }>{ region }</option>
					)) }
				</select>

				<button className="py-1 px-4 border bg-red-800 text-white rounded">&times;</button>
			</div>
		</>
	)
}