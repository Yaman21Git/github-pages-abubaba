export const checkOut = (params) => {
    return fetch(`https://yamanbackend.herokuapp.com/api/payment/order` , {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(params)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const verifyPayment = (details) => {
    return fetch(`https://yamanbackend.herokuapp.com/api/payment/verify` , {
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