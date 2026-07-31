const API = "https://dummyjson.com/auth/login";

export async function loginRequest(username, password) {

    const response = await fetch(API, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            username,

            password

        })

    });

    const data = await response.json();

    if (!response.ok) {

        throw new Error(data.message || "Error al iniciar sesión");

    }

    return data;

}