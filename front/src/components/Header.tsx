import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export function Header() {

    const user = useSelector((s) => s.user)

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
                    <Link className="main-nav-item" to="/user">
                        <i className="fa fa-user-circle"></i>
                        {user.firstName}
                    </Link>
                    <Link className="main-nav-item" to="/logout">
                        <i class="fa fa-sign-out"></i>
                        Sign Out
                    </Link></div> : <Link className="main-nav-item" to="/login">
                    <i className="fa fa-user-circle"></i>
                    Sign In</Link>
                }
            </div>
        </nav>
    )
}
