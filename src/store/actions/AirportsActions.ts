import axios from '../../axios'
import { AppDispatch } from '../index'
import { IAirport, ServerResponse } from '../../models/models'
import { airportSlice } from '../slices/AirportSlice'

export const fetchAirports = (page = 1, count = 50) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(airportSlice.actions.fetching())
			const response = await axios.get<ServerResponse<IAirport>>('airports', {
				params: { count, page }
			})
			dispatch(airportSlice.actions.fetchSuccess({
				airports: response.data.results,
				count: response.data.count
			}))
		} catch (e) {
			dispatch(airportSlice.actions.fetchError(e as Error))
		}
	}
}