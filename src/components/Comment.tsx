import React from 'react'
import { Link } from 'react-router-dom'

export function Comment() {
	return (
		<div className="py-2 px-4 border rounded mb-4">
			<div className="font-thin text-xs">comment.created</div>
			<p className="text-base">comment.comment</p>
		</div>
	)
}