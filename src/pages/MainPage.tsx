import React from 'react'
import { AirportSearch } from '../components/AirportSearch'
import { AirportFilter } from '../components/AirportFilter'
import { AirportCard } from '../components/AirportCard'

export function MainPage() {
	return (
		<div className="container mx-auto p-4 flex justify-center">
			<div>
				<AirportSearch/>
				<AirportFilter/>

				<div className="min-w-[760px]">
					<p className="text-center">Loading...</p>

					<AirportCard/>
				</div>
			</div>
		</div>
	)
}