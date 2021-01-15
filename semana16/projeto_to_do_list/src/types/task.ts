import { STATUS } from './status'

export type Task = {
    taskId: number,
    title: string,
    description: string,
    limitDate: string,
    status: STATUS,
    creatorUserId: number,
    creatorUserNickname: string
}