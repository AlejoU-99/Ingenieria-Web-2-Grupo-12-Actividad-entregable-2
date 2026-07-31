import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getProductById } from "../services/productService";
import { addOrder, getOrders } from "../services/orderService";



function ProductDetail() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [added, setAdded] = useState(false);

    useEffect(() => {

        async function loadProduct() {

            try {

                const data = await getProductById(id);

                setProduct(data);

                const orders = getOrders();

                setAdded(

                    orders.some(order => order.id === data.id)

                );

            }

            catch (err) {

                setError(err.message);

            }

            finally {

                setLoading(false);

            }

        }

        loadProduct();

    }, [id]);

    return (

        <>

            <Navbar />

            <div className="container py-5">

                {

                    loading &&

                    <div className="alert alert-info">

                        Cargando producto...

                    </div>

                }

                {

                    error &&

                    <div className="alert alert-danger">

                        {error}

                    </div>

                }

                {

                    product && (

                        <div className="row align-items-center">

                            <div className="col-md-5">

                                <img

                                    src={product.images[0]}

                                    className="img-fluid rounded shadow"

                                    alt={product.title}

                                />

                            </div>

                            <div className="col-md-7">

                                <h2>

                                    {product.title}

                                </h2>

                                <p className="text-muted">

                                    {product.brand}

                                </p>

                                <p>

                                    {product.description}

                                </p>

                                <h3 className="text-primary mb-4">

                                    ${product.price}

                                </h3>

                                <button

                                    className={

                                        added

                                            ? "btn btn-success"

                                            : "btn btn-primary"

                                    }

                                    disabled={added}

                                    onClick={() => {

                                        if (addOrder(product)) {

                                            setAdded(true);

                                        }

                                    }}

                                >

                                    {

                                        added

                                            ? "✓ Agregado"

                                            : "Agregar pedido"

                                    }

                                </button>

                            </div>

                        </div>

                    )

                }

            </div>

        </>

    );

}

export default ProductDetail;