import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAirportDetail } from '../../models/models'

interface AirportDetailState {
	airport: IAirportDetail | null,
	loading: boolean,
	error: string
}

const initialState: AirportDetailState = {
	airport: null,
	loading: false,
	error: ''
}

export const airportDetailSlice = createSlice({
	name: 'airportDetail',
	initialState,
	reducers: {
		fetching(state) {
			state.loading = true
		},
		fetchSuccess(state, action: PayloadAction<IAirportDetail>) {
			state.loading = false
			state.airport = action.payload
			state.error = ''
		},
		fetchError(state, action: PayloadAction<Error>) {
			state.loading = false
			state.error = action.payload.message
		}
	}
})

export default airportDetailSlice.reducer