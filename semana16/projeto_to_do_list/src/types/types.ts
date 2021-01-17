export enum Status {
    TODO = "to_do",
    DOING = "doing",
    DONE = "done"
}


export type User = {
    id: string,
    name: string,
    nickname: string,
    email: string
}


export type Task = {
    id: string,
    title: string,
    description: string,
    status: Status,
    limit_date: string,
    creator_user_id: string,
}