import {user} from "../type/user.ts";

export class ApiErrors {
    errors: string;

    constructor(errors: string) {
        this.errors = errors
    }
}

export async function api(endpoint: string, method: 'POST' | 'PUT', data: user | null, token?: string) {

    const response = await fetch(`http://localhost:3001/api/v1/user/${endpoint}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : ''
        },
        body: data ? JSON.stringify(data) : ''
    })

    if (response.status === 204) {
        return null
    }

    const responseData = await response.json()

    if (response.status === 404 || responseData.status === 400) {
        throw new ApiErrors(responseData.message)
    }

    return responseData

}

