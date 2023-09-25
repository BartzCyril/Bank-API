import {Header} from "../components/Header.tsx";
import {Footer} from "../components/Footer.tsx";
import {FormSignIn} from "../components/Form/FormSignIn.tsx";

export function SignIn() {
    return (
        <>
            <Header/>
            <main className="main bg-dark">
                <FormSignIn/>
            </main>
            <Footer/>
        </>
    )
}