import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (

    <BrowserRouter>

        <Routes>

            <Route

                path="/login"

                element={<Login />}

            />

            <Route

                path="/productos"

                element={

                    <ProtectedRoute>

                        <Products />

                    </ProtectedRoute>

                }

            />

            <Route

                path="/productos/:id"

                element={

                    <ProtectedRoute>

                        <ProductDetail />

                    </ProtectedRoute>

                }

            />

            <Route

                path="/pedidos"

                element={

                    <ProtectedRoute>

                        <Orders />

                    </ProtectedRoute>

                }

            />

            <Route

                path="*"

                element={<NotFound />}

            />

        </Routes>

    </BrowserRouter>

);

}

export default App;