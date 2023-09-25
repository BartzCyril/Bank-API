import {Input} from "./Input.tsx";
import {Checkbox} from "./Checkbox.tsx";

export function FormSignIn() {
    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <Input type="text" name="Username" placeholder="Write your name ..."/>
                <Input type="password" name="Password" placeholder="Write your password ..."/>
                <Checkbox name="Remember me"/>
                <button className="sign-in-button">Sign In</button>
            </form>
        </section>
    )
}