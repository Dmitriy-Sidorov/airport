import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAirport } from '../../models/models'

interface AirportState {
	airports: IAirport[]
	airportsContainer: IAirport[]
	count: number
	loading: boolean
	error: string
}

const initialState: AirportState = {
	airports: [],
	airportsContainer: [],
	count: 0,
	loading: false,
	error: ''
}

interface AirportPayload {
	airports: IAirport[]
	count: number
}

export const airportSlice = createSlice({
	name: 'airport',
	initialState,
	reducers: {
		fetching(state) {
			state.loading = true
		},
		fetchSuccess(state, action: PayloadAction<IAirport[]>) {
			state.loading = false
			state.airports = action.payload
		},
		fetchError(state, action: PayloadAction<Error>) {
			state.loading = false
			state.error = action.payload.message
		}
	}
})

export default airportSlice.reducer