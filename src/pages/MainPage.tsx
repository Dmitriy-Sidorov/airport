import React, { useEffect } from 'react'
import { fetchAirports } from '../store/actions/AirportActions'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import { AirportSearch } from '../components/AirportSearch'
import { AirportFilter } from '../components/AirportFilter'
import { AirportCard } from '../components/AirportCard'
import { Spinner } from '../components/Spinner'

export function MainPage() {
	const dispatch = useAppDispatch()
	const { error, loading, airports } = useAppSelector(state => state.airport)

	useEffect(() => {
		dispatch(fetchAirports())
	}, [])

	return (
		<div className="container mx-auto p-4 flex justify-center">
			<div>
				{/*<AirportSearch/>*/ }
				<AirportFilter/>

				<div className="min-w-[760px]">
					{ loading && <Spinner/> }
					{ error && <p className="text-center text-red-600">{ error }</p> }
					{ !loading && airports.map(airport => <AirportCard key={ airport.id } airport={ airport }/>) }
				</div>
			</div>
		</div>
	)
}