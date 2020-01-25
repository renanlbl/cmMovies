import React from 'react';
import { Link } from 'react-router-dom'

export default function navLogin() {
    return (
        <nav className="nav-login">
            <li><Link to="/register">Registrar</Link></li>
            <li><Link to="/login">Login</Link></li>
        </nav>
    )
}