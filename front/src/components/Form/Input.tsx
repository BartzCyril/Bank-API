import {useId} from "react";

type InputProps = {
    name: string
    type: "text" | "password",
    placeholder ?: string,
}

export function Input({name, type, placeholder}: InputProps) {

    const id = useId()

    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{name}</label>
            <input type={type} id={id} placeholder={placeholder} name={name}/>
        </div>
    )
}