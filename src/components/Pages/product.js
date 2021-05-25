export const load = (productId) => {
    return fetch(`https://yamanbackend.herokuapp.com/product/${productId}` , {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const addToCart = (productId, user) => {
    return fetch(`https://yamanbackend.herokuapp.com/addToCart/${productId}` , {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const addToWishlist = (productId, user) => {
    return fetch(`https://yamanbackend.herokuapp.com/addToWishlist/${productId}` , {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const getProducts = () => {
    return fetch(`http://localhost:8000/getProducts` , {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const getProductsByCategoty = (id) => {
    return fetch(`https://yamanbackend.herokuapp.com/getProductsByCategoty` , {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(id)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}