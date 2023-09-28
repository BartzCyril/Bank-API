import {Input} from "./Input.tsx";
import {Checkbox} from "./Checkbox.tsx";
import {useState} from "react";
import {Error} from "./Error.tsx";
import {api} from "../../utils/api/api.ts";
import {useDispatch} from "react-redux";
import {userLogIn} from "../../utils/slice/userSlice.ts";
import {useNavigate} from "react-router-dom";

export function FormSignIn() {

    const [error, setError] = useState({
        username: null,
        password: null,
        global: null
    })

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const isValidData = (data: string) => {
        if (data.trim() === "") {
            setError(prevError => ({
                ...prevError,
                [data]: data === "username"
                    ? "Vous avez oublié de saisir username"
                    : "Vous avez oublié de saisir le mot de passe"
            }))
            return false
        }

        setError(prevError => ({
            ...prevError,
            [data]: data === "username"
                ? null
                : null
        }))
        return true
    }

    const save = (token: string) => {
        api("profile", "POST", null, token)
            .then((data) => {dispatch(userLogIn({
                token: token,
                firstName: data.body.firstName,
                lastName: data.body.lastName
            }))
                navigate("/profile")
            })
            .catch(error => console.log(error))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const username = data.get("Username")!.toString()
        const password = data.get("Password")!.toString()
        if (isValidData(username) && isValidData(password)) {
            const user = {
                email: username,
                password: password
            }
            api("login", "POST", user)
                .then(d => save(d.body.token))
                .catch(error => {setError(prevError => ({...prevError, global: error.errors}))})
        }
    }

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <Input type="text" name="Username" placeholder="Write your name ..."/>
                {error.username ? <Error message={error.username}/> : ""}
                <Input type="password" name="Password" placeholder="Write your password ..."/>
                {error.password ? <Error message={error.password}/> : ""}
                <Checkbox name="Remember me"/>
                <button className="sign-in-button">Sign In</button>
            </form>
            {error.global ? <Error message={error.global}/> : ""}
        </section>
    )
}
