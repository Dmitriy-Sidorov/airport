import React, { useEffect, useRef } from 'react'
import { fetchAirports } from '../store/actions/AirportsActions'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import { AirportFilter } from '../components/AirportFilter'
import { AirportCard } from '../components/AirportCard'
import { Spinner } from '../components/Spinner'
import ReactPaginate from 'react-paginate'
import { AirportSearch } from '../components/AirportSearch'
import { fetchHandbooks } from '../store/actions/HandbooksActions'

const ITEMS_PER_PAGE = 50

export function MainPage() {
	const { error, loading, airports, count } = useAppSelector(state => state.airport)
	const page = useRef(1)
	const dispatch = useAppDispatch()
	const pageCount = Math.ceil(count / ITEMS_PER_PAGE)

	useEffect(() => {
		dispatch(fetchAirports(page.current, ITEMS_PER_PAGE))
		dispatch(fetchHandbooks())
	}, [dispatch])

	const pageChangeHandler = ({selected}: {selected: number}) => {
		page.current = selected + 1
		dispatch(fetchAirports(page.current, ITEMS_PER_PAGE))
	}

	return (
		<div className="container mx-auto p-4 flex justify-center">
			<div>
				<AirportSearch/>
				<AirportFilter/>

				<div className="min-w-[760px]">
					{ loading && <Spinner/> }
					{ error && <p className="text-center text-red-600">{ error }</p> }
					{ (count > 0 && !loading)
						? airports.map(airport => (
							<AirportCard airport={ airport } key={ airport.id }/>
						))
						: <p className="text-center">No items</p> }

					{ pageCount && <ReactPaginate
						breakLabel="..."
						nextLabel=">"
						onPageChange={ pageChangeHandler }
						pageRangeDisplayed={ 3 }
						pageCount={ pageCount }
						forcePage={ page.current - 1 }
						previousLabel="<"
						containerClassName="flex"
						pageClassName="border py-1 px-3 mr-2"
						activeClassName="bg-gray-500 text-white"
						previousClassName="border py-1 px-3 mr-2"
						nextClassName="border py-1 px-3"
					/> }
				</div>
			</div>
		</div>
	)
}