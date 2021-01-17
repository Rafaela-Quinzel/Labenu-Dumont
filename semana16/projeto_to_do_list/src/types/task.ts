import { Status } from './status'

export type Task = {
    id: number,
    title: string,
    description: string,
    status: Status,
    limit_date: string,
    creator_user_id: number,
}