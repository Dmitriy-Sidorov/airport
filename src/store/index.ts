import { combineReducers, configureStore } from '@reduxjs/toolkit'
import airportReducer from './slices/AirportSlice'
import searchAirportReducer from './slices/SearchAirportSlice'
import airportDetailReducer from './slices/AirportDetailSlice'
import commentReducer from './slices/CommentSlice'
import HandbooksReducer from './slices/HandbooksSlice'

const rootReducer = combineReducers({
	airport: airportReducer,
	search: searchAirportReducer,
	airportDetail: airportDetailReducer,
	comment: commentReducer,
	handbook: HandbooksReducer
})

export function setupStore() {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']