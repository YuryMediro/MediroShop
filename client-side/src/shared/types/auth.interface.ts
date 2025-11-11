import type { IUser } from "./user.interface"

export interface IAuthForm {
	name: string
	email: string
	password: string
}

export interface IAuthResponse {
    user: IUser
    accessToken: string
    
}

