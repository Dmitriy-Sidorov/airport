import axios from '../../axios'
import { AppDispatch } from '../index'
import { IComment, ServerResponse } from '../../models/models'
import { commentSlice } from '../slices/CommentSlice'

export const fetchComments = (id: string) => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(commentSlice.actions.fetching())
			const response = await axios.get<ServerResponse<IComment>>(`airports/${id}/comments`, {
				params: {count: 10}
			})
			dispatch(commentSlice.actions.fetchSuccess(response.data.results))
		} catch (e) {
			dispatch(commentSlice.actions.fetchError(e as Error))
		}
	}
}