const API = "https://dummyjson.com/products";

export async function getProducts() {

    const response = await fetch(API);

    if (!response.ok) {

        throw new Error("No fue posible obtener los productos.");

    }

    const data = await response.json();

    return data.products;

}

export async function getProductById(id) {

    const response = await fetch(`${API}/${id}`);

    if (!response.ok) {

        throw new Error("Producto no encontrado.");

    }

    return await response.json();

}