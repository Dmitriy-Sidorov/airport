import { combineReducers, configureStore } from '@reduxjs/toolkit'
import airportReducer from './slices/AirportSlice'
import airportDetailReducer from './slices/AirportDetailSlice'
import commentReducer from './slices/CommentSlice'

const rootReducer = combineReducers({
	airport: airportReducer,
	airportDetail: airportDetailReducer,
	comment: commentReducer
})

export function setupStore() {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']