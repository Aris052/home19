"use server"
import { users } from '@/app/helpers/data'
import { NextRequest, NextResponse } from "next/server"

interface IProps {
	params: { id: string }
}

export async function GET(req: NextRequest, { params }: IProps) {
	const user = users.find((user) => user.id === params.id)

	if (!user) {
		return NextResponse.json({ error: "User not found" }, { status: 404 })
	}

	return NextResponse.json(user, { status: 200 })
}
