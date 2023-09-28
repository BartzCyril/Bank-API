import {Header} from "../components/Header.tsx";
import {Footer} from "../components/Footer.tsx";
import {Account} from "../components/Account/Account.tsx";
import {EditName} from "../components/Account/EditName.tsx";

export function Profile() {
    return (
        <>
            <Header/>
            <main className="main bg-dark profile">
                <EditName/>
                <Account/>
            </main>
            <Footer/>
        </>
    )
}