import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";
import { addOrder } from "../services/orderService";

function Products() {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        async function loadProducts() {

            try {

                const data = await getProducts();

                setProducts(data);

            }

            catch (err) {

                setError(err.message);

            }

            finally {

                setLoading(false);

            }

        }

        loadProducts();

    }, []);

    return (

        <>

            <Navbar />

            <div className="container py-5">

                <h2 className="mb-4 text-center">

                    Productos

                </h2>

                {

                    loading &&

                    <div className="alert alert-info">

                        Cargando productos...

                    </div>

                }

                {

                    error &&

                    <div className="alert alert-danger">

                        {error}

                    </div>

                }

                <div className="row g-4">

                    {

                        products.map(product => (

                            <ProductCard

                                key={product.id}

                                id={product.id}

                                image={product.thumbnail}

                                title={product.title}

                                description={product.description}

                                price={product.price}

                                onAdd={() => {

                                    return addOrder(product);       

                                }}

                            />

                        ))

                    }

                </div>

            </div>

        </>

    );

}

export default Products;