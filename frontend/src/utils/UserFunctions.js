import axios from 'axios';


export const register = newUser => {
    return axios.post('http://localhost:5000/register', {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
    })
    .then(res => console.log('registred'))
}

export const login = user => {
    return axios.post('http://localhost:5000/login', {
        email: user.email,
        password: user.password
    })
    .then(res => {    
        localStorage.setItem('usertoken', res.data.token)
        return res.data.token
    })
    .catch(err => alert('Preencha E-mail ou Senha corretamente'))
}