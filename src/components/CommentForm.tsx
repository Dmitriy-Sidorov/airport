import React from 'react'
import { Link } from 'react-router-dom'

export function CommentForm() {
	return (
		<form className="mb-4">
      <textarea
	      className="border py-2 px-4 w-full outline-0 resize-none"
	      placeholder="Type your comment here"
      />
			<button
				type="submit"
				className="border py-2 px-4 hover:bg-gray-500 hover:text-white hover:transition-all"
			>Create</button>
		</form>
	)
}