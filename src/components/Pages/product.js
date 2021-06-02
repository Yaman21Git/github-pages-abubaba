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
    return fetch(`https://yamanbackend.herokuapp.com/getProducts` , {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const getProductsByCategoty = (name) => {
    return fetch(`https://yamanbackend.herokuapp.com/getProductsByCategoty` , {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(name)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const searchByWord = (word) => {
    return fetch(`https://yamanbackend.herokuapp.com/search` , {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(word)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const getUser = (userId) => {
    return fetch(`https://yamanbackend.herokuapp.com/user/${userId}` , {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const sendQuery = (query) => {
    return fetch(`https://yamanbackend.herokuapp.com/query` , {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(query)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const newsletter = (email) => {
    return fetch(`https://yamanbackend.herokuapp.com/newsletter` , {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(email)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}



export const addOrder = (userId, cart) => {
    return fetch(`https://yamanbackend.herokuapp.com/addOrder/${userId}` , {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(cart)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}
