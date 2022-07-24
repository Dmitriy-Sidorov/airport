import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
	return (
		<nav className="flex justify-between w-full items-center drop-shadow h-[50px] px-5 bg-gray-100">
			<h3><Link to="/">Airports</Link></h3>

			<div>
				<Link to="/auth">Auth</Link>
			</div>
		</nav>
	)
}