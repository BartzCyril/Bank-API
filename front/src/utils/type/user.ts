export type user = {
    email?: string,
    password?: string,
    firstName?: string,
    lastName?: string,
    token?:string
}

export interface userSelector {
    user: user
}