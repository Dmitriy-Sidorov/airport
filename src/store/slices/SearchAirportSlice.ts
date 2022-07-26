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

export const searchAirportSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		fetching(state) {
			state.loading = true
		},
		fetchSuccess(state, action: PayloadAction<AirportPayload>) {
			state.loading = false
			state.airports = action.payload.airports
			state.count = action.payload.count
		},
		fetchError(state, action: PayloadAction<Error>) {
			state.loading = false
			state.error = action.payload.message
		}
	}
})

export default searchAirportSlice.reducer