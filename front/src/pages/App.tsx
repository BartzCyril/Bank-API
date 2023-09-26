import "../css/main.css"
import {Header} from "../components/Header.tsx";
import {Footer} from "../components/Footer.tsx";
import {Feature} from "../components/Feature/Feature.tsx";
import {useEffect} from "react";
import {api} from "../utils/api/api.ts";

export function App() {

    const user = {
        email: "steve@rogers.com",
        password: "password456",
    }

    useEffect(() => {
        api("login", null, "POST", user)
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <Header/>
            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <Feature/>
            </main>
            <Footer/>
        </>
    )
}