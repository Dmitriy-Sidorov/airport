import React from 'react'

export function AirportFilter() {
	return (
		<div className="border mb-2 p-2">
			<span className="mr-2">Filter</span>
			<select className="px-2 py-1 border mr-2" name="type">
				<option disabled className="text-gray-500" value="1">Type</option>
			</select>

			<select className="px-2 py-1 border mr-2" name="country">
				<option disabled className="text-gray-500" value="1">Country</option>
			</select>

			<select className="px-2 py-1 border mr-2" name="region">
				<option disabled className="text-gray-500" value="1">Region</option>
			</select>

			<button className="py-1 px-4 border bg-red-800 text-white rounded" >&times;</button>
		</div>
	)
}