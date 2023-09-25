import {Link} from "react-router-dom";

export function Error() {
    return (
        <div className="error-container">
            <div>
                <div>404</div>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link to="/">
                Retourner sur la page d’accueil
            </Link>
        </div>
    )
}