import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import NavLogin from '../components/NavLogin';
import NavUser from '../components/NavUser';

class Header extends React.Component {
    

    render() {
        return (
            <header>
                <div>
                <Link to="/">Início</Link> | 
                {localStorage.usertoken ? <Link to="/cinema">Cinema</Link> : ''}
                </div>
                <nav>   
                    <ul>                        
                        {localStorage.usertoken ? <NavUser /> : <NavLogin />}
                    </ul>
                </nav>
            </header> 
        )
    }
}

export default withRouter(Header)