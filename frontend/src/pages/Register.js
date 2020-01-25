import React, { Component } from 'react'
import { register } from '../utils/UserFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {      
      name: '',
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      name: this.state.name,     
      email: this.state.email,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container register">
        <div className="register-form">       
            <form noValidate onSubmit={this.onSubmit}>
              <h1>Registrar</h1>
                <label for="name">Nome:</label> 
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your first name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <label for="email">E-mail:</label> 
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <label for="password">Senha:</label> 
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
             
              <button
                type="submit"
                className="btn-registrar"
              >
                Registrar
              </button>
            </form>
            </div>
          </div> 
    )
  }
}

export default Register