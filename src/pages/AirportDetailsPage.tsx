import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hook/redux'
import { fetchAirportDetail } from '../store/actions/AirportDetailActions'
import { useParams } from 'react-router-dom'
import { fetchComments } from '../store/actions/CommentActions'
import { Comment } from '../components/Comment'
import { Spinner } from '../components/Spinner'

export function AirportDetailsPage() {
	const { airport, loading } = useAppSelector(state => state.airportDetail)
	const { comments, loading: commentLoading } = useAppSelector(state => state.comment)
	const dispatch = useAppDispatch()
	const params = useParams<'id'>()

	useEffect(() => {
		dispatch(fetchAirportDetail(params.id!))
		dispatch(fetchComments(params.id!))
	}, [dispatch, params.id])

	if (loading) return <Spinner/>

	return (
		<div className="container mx-auto mt-8 p-4 flex justify-center">
			<div>
				<h1 className="font-bold size text-3xl">{ airport?.name }</h1>
				<p>country: { airport?.country }</p>
				<p>continent: { airport?.continent }</p>
				<p>coordinates: { airport?.coordinates }</p>
				<p>elevation_ft: { airport?.elevation_ft }</p>
				<p>gps_code: { airport?.gps_code }</p>
				<p>iata_code: { airport?.iata_code }</p>
				<p>ident: { airport?.ident }</p>
				<p>local_code: { airport?.local_code }</p>
				<p>municipality: { airport?.municipality }</p>
				<p>region: { airport?.region }</p>
				<p>type: { airport?.type }</p>

				<hr className="my-4"/>

				{
					commentLoading
						? <Spinner/>
						: comments.length
							? comments.map(comment => <Comment key={comment.id} comment={comment}/>)
							: <p>No comments!</p>
				}
			</div>
		</div>
	)
}