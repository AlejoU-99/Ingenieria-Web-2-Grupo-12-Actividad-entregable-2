import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOrders } from "../services/orderService";

function ProductCard({

    id,
    image,
    title,
    description,
    price,
    onAdd,

}) {
    const [added, setAdded] = useState(false);

    useEffect(() => {

        const orders = getOrders();

        setAdded(

            orders.some(order => order.id === id)

        );

    }, [id]);

    return (

        <div className="col-md-6 col-lg-4 col-xl-3">

            <div className="card h-100 shadow-sm">

                <img

                    src={image}

                    className="card-img-top"

                    alt={title}

                />

                <div className="card-body d-flex flex-column">

                    <h5 className="card-title">

                        {title}

                    </h5>

                    <p className="card-text flex-grow-1">

                        {description}

                    </p>

                    <h5 className="price fw-bold mb-3">

                        ${price}

                    </h5>

                    <div className="d-grid gap-2">

                        <Link

                            to={`/productos/${id}`}

                            className="btn btn-outline-primary"

                        >

                            Ver detalle

                        </Link>

                        <button

                            className={

                                added

                                    ? "btn btn-success w-100"

                                    : "btn btn-primary w-100"

                            }

                            disabled={added}

                            onClick={() => {

                                const success = onAdd();

                                if (success) {

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

            </div>

        </div>

    );

}

export default ProductCard;