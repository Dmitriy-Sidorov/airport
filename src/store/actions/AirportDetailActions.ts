import axios from '../../axios'
import { AppDispatch } from '../index'
import { IAirportDetail } from '../../models/models'
import { airportDetailSlice } from '../slices/AirportDetailSlice'

export const fetchAirportDetail = (id: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(airportDetailSlice.actions.fetching())
			const response = await axios.get<IAirportDetail>(`airports/${id}`)
			dispatch(airportDetailSlice.actions.fetchSuccess(response.data))
		} catch (e) {
			dispatch(airportDetailSlice.actions.fetchError(e as Error))
		}
	}
}