export const signup = user => {
    return fetch(`https://backend-abubaba.herokuapp.com/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
};

export const signin = user => {
    return fetch(`https://backend-abubaba.herokuapp.com/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
        })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
    
};

export const authenticate=(jwt, next)=> {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(jwt))
        next();
    }
}

export const signout = (next) => {
    if (typeof window !== "undefined") localStorage.removeItem("jwt")
    next()
    return fetch(`https://backend-abubaba.herokuapp.com/signout`, {
        method: "GET"
    })
        .then(response => {
            console.log('signout', response)
            return response.json()
    
        })
        .catch(err => console.log(err))
};

export const isAuthenticated = () => {
    if (typeof window == "undefined")
        return false
    if (localStorage.getItem("jwt"))
        return JSON.parse(localStorage.getItem("jwt"))
    else
        return false
};

export const userDetails = () => {
    if (typeof window == "undefined")
        return false
    if (localStorage.getItem("user"))
        return JSON.parse(localStorage.getItem("user"))
    else
        return false
};


export const updateUser = (user, userId) => {
    return fetch(`https://backend-abubaba.herokuapp.com/updateUser/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
        })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}
