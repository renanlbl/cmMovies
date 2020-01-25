import React, { Component } from 'react'
import { login } from '../utils/UserFunctions'

class Login extends Component {
    
  state = {
    email: '',
    password: '',
    errors: {}
  }  

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  
  onSubmit = (e) => {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user)
      .then(res => {
        if (res) {
          this.props.history.push('/cinema')
        }
      })      
  }

  render() {
    return (
      <div className="container login">        
          <div className="login-form">
            <form noValidate onSubmit={this.onSubmit}>
              <h1>Logar:</h1>
              <div className="form-group">
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Senha:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn-login"
              >
                Logar
              </button>
            </form>
          </div>
        </div>     
    )
  }
}

export default Login