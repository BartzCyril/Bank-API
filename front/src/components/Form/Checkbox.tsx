import {useId} from "react";

type CheckboxProps = {
    name: string,
    defaultValue: boolean
}

export function Checkbox({name, defaultValue}: CheckboxProps) {
    const id = useId()

    return (
        <div className="input-remember">
            <label htmlFor={id}>{name}</label>
            <input type="checkbox" id={id} name={name} defaultChecked={defaultValue}/>
        </div>
    )
}