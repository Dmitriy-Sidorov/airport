import React from 'react'

export function AirportCard() {
	return (
		<div className="border py-4 px-6 mb-2 cursor-pointer hover:shadow-lg hover:transition-all rounded-md">
			<h4>Name: airport.name</h4>
			<strong>Country: airport.country</strong>
			<p>Ident: airport.ident</p>
			<p>Type: airport.type</p>
			<p>Local Code: airport.local_code</p>
			<p>Region: airport.region</p>
		</div>
	)
}