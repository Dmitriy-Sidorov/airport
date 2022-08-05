import axios from '../../axios'
import { AppDispatch } from '../index'
import { IAirportCountry, IAirportRegion, IAirportType } from '../../models/models'
import { handbooksSlice } from '../slices/HandbooksSlice'

export const fetchHandbooks = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(handbooksSlice.actions.fetching())

			const [types, regions, countries] = await Promise.all([
				axios.get<IAirportType[]>('/handbooks/airport-types'),
				axios.get<IAirportRegion[]>('/handbooks/regions'),
				axios.get<IAirportCountry[]>('/handbooks/countries')
			])

			dispatch(handbooksSlice.actions.fetchSuccess({
				types: types.data,
				regions: regions.data,
				countries: countries.data
			}))
		} catch (e) {
			dispatch(handbooksSlice.actions.fetchError(e as Error))
		}
	}
}