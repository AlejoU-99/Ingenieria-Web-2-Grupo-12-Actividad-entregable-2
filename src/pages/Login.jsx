import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

import { loginRequest } from "../services/authService";

function Login() {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {

        e.preventDefault();

        if (!username || !password) {

            setError("Todos los campos son obligatorios.");

            return;

        }

        try {

            setLoading(true);

            setError("");

            const data = await loginRequest(username, password);

            login(data, data.accessToken);

            navigate("/productos");

        }

        catch (err) {

            setError(err.message);

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div className="container">

            <div className="row justify-content-center align-items-center vh-100">

                <div className="col-md-6 col-lg-4">

                    <div className="card login-card shadow">

                        <div className="card-body p-4">

                            <h2 className="text-center mb-4">

                                ShopPanel

                            </h2>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Usuario

                                    </label>

                                    <input

                                        type="text"

                                        className="form-control"

                                        value={username}

                                        onChange={(e) => setUsername(e.target.value)}

                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Contraseña

                                    </label>

                                    <input

                                        type="password"

                                        className="form-control"

                                        value={password}

                                        onChange={(e) => setPassword(e.target.value)}

                                    />

                                </div>

                                {

                                    error && (

                                        <div className="alert alert-danger">

                                            {error}

                                        </div>

                                    )

                                }

                                <button

                                    className="btn btn-primary w-100"

                                    disabled={loading}

                                >

                                    {

                                        loading

                                            ? "Ingresando..."

                                            : "Iniciar sesión"

                                    }

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;