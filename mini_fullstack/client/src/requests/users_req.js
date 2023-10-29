export const getAllUsers = callback => {
    fetch("http://localhost:4001/users")
        .then((res) => res.json())
        .then((data) => callback(data))
}
export const addUser = (user) => {
    return fetch('http://localhost:4001/users/add', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(json => console.log(json))
}
export const deleteUser = (id) => {
    return fetch('http://localhost:4001/users/delete', {
        method: 'delete',
        body: JSON.stringify(id),
        headers: {
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        }
    })
        .then(response => response.text())
        .then(json => console.log(json))
}