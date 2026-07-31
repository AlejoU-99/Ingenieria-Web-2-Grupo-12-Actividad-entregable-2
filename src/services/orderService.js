const STORAGE_KEY = "orders";

export function getOrders() {

    const orders = localStorage.getItem(STORAGE_KEY);

    return orders ? JSON.parse(orders) : [];

}

export function saveOrders(orders) {

    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));

}

export function addOrder(product) {

    const orders = getOrders();

    const exists = orders.find(order => order.id === product.id);

    if (exists) {

        return false;

    }

    orders.push({

        id: product.id,

        title: product.title,

        image: product.thumbnail,

        price: product.price,

        status: "Pendiente"

    });

    saveOrders(orders);

    return true;

}

export function updateOrderStatus(id, status) {

    const orders = getOrders().map(order =>

        order.id === id

            ? { ...order, status }

            : order

    );

    saveOrders(orders);

}

export function removeOrders() {

    localStorage.removeItem(STORAGE_KEY);

}

export function removeOrder(id) {

    const orders = getOrders().filter(order => order.id !== id);

    saveOrders(orders);

}