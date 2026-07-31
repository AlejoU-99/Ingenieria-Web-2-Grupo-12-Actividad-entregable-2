import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import OrderCard from "../components/OrderCard";

import {

    getOrders,

    updateOrderStatus,

    removeOrder

} from "../services/orderService";

function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        setOrders(getOrders());

    }, []);

    function changeStatus(id, status) {

        updateOrderStatus(id, status);

        setOrders(getOrders());

    }

    function deleteOrder(id) {

        removeOrder(id);

        setOrders(getOrders());

    }

    function deleteOrder(id) {

        const confirmDelete = window.confirm(

            "¿Desea eliminar este pedido?"

        );

        if (!confirmDelete) return;

        removeOrder(id);

        setOrders(getOrders());

    }


    return (

        <>

            <Navbar />

            <div className="container py-5">

                <h2 className="mb-4 text-center">

                    Mis pedidos

                </h2>

                {

                    orders.length === 0 &&

                    <div className="alert alert-warning">

                        No hay pedidos registrados.

                    </div>

                }

                <div className="row g-4">

                    {

                        orders.map(order => (

                            <OrderCard

                                key={order.id}

                                order={order}

                                onChangeStatus={changeStatus}

                                onDelete={deleteOrder}

                            />

                        ))

                    }

                </div>

            </div>

        </>

    );

}

export default Orders;