"use client"

import { IUser } from '@/app/helpers/types'
import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export function UserDetails() {
	const { id } = useParams()
	const [user, setUser] = useState<IUser | null>(null)

	useEffect(() => {
		if (id) {
			axios
				.get(`https://localhost:3000/users/${id}`)
				.then((res) => {
					setUser(res.data)
				})
		}
	}, [id])

	if (!user) {
		return <div className="text-center text-red-500">User not found.</div>
	}

	return (
		<div className="min-h-screen bg-gray-900 text-white p-8">
			<h1 className="text-3xl font-bold text-center mb-6">User Details</h1>
			<div className="bg-gray-800 p-6 rounded-lg shadow-lg">
				<h2 className="text-2xl font-semibold text-indigo-400">
					{user.name} {user.surname}
				</h2>
				<p className="mt-4 text-gray-300">Age: {user.age}</p>
				<p className="text-gray-300">Salary: ${user.salary.toLocaleString()}</p>
			</div>
		</div>
	)
}
