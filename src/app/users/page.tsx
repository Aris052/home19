"use client"

import axios from "axios"
import { useEffect } from "react"

export default function User() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/api")
      .then((res) => console.log(res.data))
  }, [])

  return (
    <>
      <h1>Users</h1>
    </>
  )
}
