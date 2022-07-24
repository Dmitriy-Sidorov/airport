import React from 'react'

export function AirportSearch() {
	return (
		<div className="mb-4 relative">
			<input
				className="border px-4 py-2 w-full outline-0 h-[42px]"
				type="text"
				value="1"
				placeholder="Search for airport..."
			/>
		</div>
	)
}