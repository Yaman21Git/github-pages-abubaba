export const load = (productId) => {
    return fetch(`https://backend-abubaba.herokuapp.com/product/${productId}` , {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const addToCart = (productId, user) => {
    return fetch(`https://backend-abubaba.herokuapp.com/addToCart/${productId}` , {
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

export const postReviews = (productId, details) => {
    return fetch(`https://l/postReviews/${productId}` , {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(details)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const getProducts = () => {
    return fetch(`https://backend-abubaba.herokuapp.com/getProducts` , {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const getProductsByCategoty = (name) => {
    return fetch(`https://backend-abubaba.herokuapp.com/getProductsByCategoty` , {
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
    return fetch(`https://backend-abubaba.herokuapp.com/search` , {
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
    return fetch(`https://backend-abubaba.herokuapp.com/user/${userId}` , {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const sendQuery = (query) => {
    return fetch(`https://backend-abubaba.herokuapp.com/query` , {
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
    return fetch(`https://backend-abubaba.herokuapp.com/newsletter` , {
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



export const addOrder = (cart) => {
    return fetch(`https://backend-abubaba.herokuapp.com/addOrder` , {
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
