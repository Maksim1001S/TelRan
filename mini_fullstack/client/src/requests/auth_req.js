export const RegisterUser = (user) => {
    fetch('http://localhost:4001/auth/register', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.text())
        .then(json => console.log(json))
}
export const LoginUser = (user) => {
    fetch('http://localhost:4001/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        }
    })
        .then(response => response.text())
        .then(json => console.log(json))
}