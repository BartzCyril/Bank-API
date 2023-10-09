import {Header} from "../components/Header.tsx";
import {Footer} from "../components/Footer.tsx";
import {Account} from "../components/Account/Account.tsx";
import {EditName} from "../components/Account/EditName.tsx";
import {useSelector} from "react-redux";
import {user, userSelector} from "../utils/type/user.ts";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export function Profile() {

    const user: user = useSelector<userSelector>((u) => u.user) as user

    if (user.token) {
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
    } else {
        const navigate = useNavigate()
        useEffect(() => {
            navigate("/login")
        }, []);

    }

}