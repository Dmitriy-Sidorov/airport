import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAirportCountry, IAirportRegion, IAirportType } from '../../models/models'

interface HandbookState {
	loading: boolean,
	error: string,
	types: IAirportType[],
	regions: IAirportRegion[],
	countries: IAirportCountry[]
}

const initialState: HandbookState = {
	loading: false,
	error: '',
	types: [],
	regions: [],
	countries: []
}

interface HandbookPayload {
	types: IAirportType[],
	regions: IAirportRegion[],
	countries: IAirportCountry[]
}

export const handbooksSlice = createSlice({
	name: 'handbook',
	initialState,
	reducers: {
		fetching(state) {
			state.loading = true
		},
		fetchSuccess(state, action: PayloadAction<HandbookPayload>) {
			state.loading = false
			state.types = action.payload.types
			state.regions = action.payload.regions
			state.countries = action.payload.countries
		},
		fetchError(state, action: PayloadAction<Error>) {
			state.loading = false
			state.error = action.payload.message
		}
	}
})

export default handbooksSlice.reducer