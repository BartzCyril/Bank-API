import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {user, userSelector} from "../utils/type/user.ts";

export function Header() {

    const user: user = useSelector<userSelector>((u) => u.user) as user

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src="./img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {user.token ?
                    <div>
                    <Link className="main-nav-item" to="/profile">
                        <i className="fa fa-user-circle"></i>
                        {user.firstName}
                    </Link>
                    <Link className="main-nav-item" to="/logout">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link></div> : <Link className="main-nav-item" to="/login">
                    <i className="fa fa-user-circle"></i>
                    Sign In</Link>
                }
            </div>
        </nav>
    )
}
