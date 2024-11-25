"use client"
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IUser } from './helpers/types'

export default function Home() {
  const [users, setUsers] = useState<IUser[]>([])
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/api")
      .then((res) => setUsers(res.data))
  }, [])



  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <button className="mb-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all">
        Add User
      </button>
      <h1 className="text-3xl font-bold text-center mb-6">User List</h1>

      <div className="space-y-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold text-indigo-400">{user.name}</div>
              <div className="text-lg text-gray-400">{user.surname}</div>
            </div>
            <div className="text-gray-300 mt-2">
              <p>Age: {user.age}</p>
              <p>Salary: ${user.salary.toLocaleString()}</p>
            </div>
            <div className="mt-4 flex space-x-4">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all">
                Delete
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all">
                Edit
              </button>
              <Link
                href={`/users/${user.id}`}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
