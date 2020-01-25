import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

function NavUser({ history }) {
    function logOut(e) {        
        e.preventDefault()
        localStorage.removeItem('usertoken') 
        history.push('/')        
    }  
    
    const [name, setName] = useState('')

    useEffect(() => {
        const token = localStorage.usertoken  
        const decoded = jwt_decode(token)       
        setName(decoded.name)
          
    }, [])

    return (
        <nav className="nav-user">            
            <span>Bem-Vindo, {name}</span>
            <li><button onClick={logOut} type="button">Sair</button></li>
        </nav>
    )
}

export default withRouter(NavUser)