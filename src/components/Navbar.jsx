import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


function Navbar() {

    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    function handleLogout() {

        logout();

        navigate("/login");

    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">

            <div className="container">

                <NavLink
                    to="/productos"
                    className="navbar-brand fw-bold"
                >

                    ShopPanel

                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                >

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div
                    className="collapse navbar-collapse"
                    id="menu"
                >

                    <ul className="navbar-nav ms-auto align-items-lg-center">

                        <li className="nav-item">

                            <NavLink
                                to="/productos"
                                className="nav-link"
                            >

                                Productos

                            </NavLink>

                        </li>

                        <li className="nav-item">

                            <NavLink
                                to="/pedidos"
                                className="nav-link"
                            >

                                Pedidos

                            </NavLink>

                        </li>

                        <li className="nav-item ms-lg-4">

                            <span className="navbar-text">

                                 Hola, {user?.firstName}

                            </span>

                        </li>

                        <li className="nav-item ms-lg-3">

                            <button className="btn-out btn btn-outline-light"
                            onClick={handleLogout}>

                                Cerrar sesión

                            </button>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;