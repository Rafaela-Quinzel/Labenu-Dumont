import { Status } from './status'

export type Task = {
    // id: string,
    title: string,
    description: string,
    status: Status,
    limit_date: string,
    creator_user_id: string,
}