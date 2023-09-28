import {useId} from "react";

type CheckboxProps = {
    name: string,
}

export function Checkbox({name}: CheckboxProps) {
    const id = useId()

    return (
        <div className="input-remember">
            <label htmlFor={id}>{name}</label>
            <input type="checkbox" id={id} name={name}/>
        </div>
    )
}