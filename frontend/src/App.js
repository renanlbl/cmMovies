import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/main.scss';
import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Cinema from './pages/Cinema'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />  
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} /> 
        <Route exact path="/cinema" component={Cinema} /> 
        <Footer />
      </BrowserRouter>      
    </div>
  );
}

export default App;
