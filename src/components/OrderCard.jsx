function OrderCard({ order, onChangeStatus, onDelete }) {

    return (

        <div className="col-md-6 col-lg-4">

            <div className="card h-100 shadow-sm">

                <img

                    src={order.image}

                    className="card-img-top"

                    alt={order.title}

                />

                <div className="card-body">

                    <h5>

                        {order.title}

                    </h5>

                    <p>

                        ${order.price}

                    </p>

                    <p className="fw-bold">
                        Estado
                    </p>

                    <select

                        className="form-select"

                        value={order.status}

                        onChange={(e) =>

                            onChangeStatus(

                                order.id,

                                e.target.value

                            )

                        }

                    >

                        <option>Pendiente</option>

                        <option>Confirmado</option>

                        <option>Enviado</option>

                        <option>Cancelado</option>

                    </select>

                    <button

                        className="btn btn-danger w-100 mt-3"

                        onClick={() => onDelete(order.id)}

                    >

                        <i className="bi bi-trash me-2"></i>

                        Eliminar del pedido

                    </button>

                </div>

            </div>

        </div>

    );

}



export default OrderCard;