import { Link } from "react-router-dom";

function NotFound() {

    return (

        <div className="container text-center mt-5">

            <h1>404</h1>

            <p>Página no encontrada.</p>

            <Link
                to="/login"
                className="btn btn-primary"
            >

                Volver

            </Link>

        </div>

    );

}

export default NotFound;