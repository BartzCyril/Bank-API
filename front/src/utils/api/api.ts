import {user} from "../type/user.ts";

export class ApiErrors {
    errors: string;

    constructor(errors: string) {
        this.errors = errors
    }
}

export async function api(endpoint: string, token: string | null, method: 'POST' | 'PUT', data: user | null) {

    const response = await fetch(`http://localhost:3001/api/v1/user/${endpoint}`, {
        method: method,
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : token ? token : ''
        },
        body: data ? JSON.stringify(data) : ''
    })

    if (response.status === 204) {
        return null
    }

    const responseData = await response.json()

    if (response.status === 404) {
        throw new ApiErrors(responseData)
    }

    return responseData

}

