type ErrorProps = {
    message: string
}

export function Error({message} : ErrorProps) {
    return <p className="error">{message}</p>
}