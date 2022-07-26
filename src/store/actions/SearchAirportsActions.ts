import axios from '../../axios'
import { AppDispatch } from '../index'
import { IAirport, ServerResponse } from '../../models/models'
import { searchAirportSlice } from '../slices/SearchAirportSlice'

export const fetchSearchAirports = (search = '', page = 1, count = 50) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(searchAirportSlice.actions.fetching())
			const response = await axios.get<ServerResponse<IAirport>>('airports', {
				params: { search, count, page }
			})
			dispatch(searchAirportSlice.actions.fetchSuccess({
				airports: response.data.results,
				count: response.data.count
			}))
		} catch (e) {
			dispatch(searchAirportSlice.actions.fetchError(e as Error))
		}
	}
}