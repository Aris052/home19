import { users } from '@/app/helpers/data'

export const GET = () => {
    return Response.json(users)
}