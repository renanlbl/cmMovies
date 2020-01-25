import React, { Component} from 'react'
import axios from 'axios'

class Cinema extends Component {
    constructor() {
        super()
        this.state = {
            year: '',
            filme: '',
            name: '',
            email:'',
            filmes: false
        }
        
    }
    
    componentDidMount = async () => {
        const token = localStorage.usertoken  

        if (!token) {
            return this.props.history.push('/login')
        }

        
    }

    renderMovie = async (e) => {
        e.preventDefault()
        const key = '27c1f735';
        const search = this.state.filme.replace(' ', '+')
        const year = this.state.year
        const response = await axios.get(`http://omdbapi.com/?apikey=${key}&t=${search}&y=${year}`)        
        await this.setState({
            filmes: response.data
        })
        this.setState({
            filme: '',
            year: ''
        })  
    }

    handleFilme = (e) => {
        this.setState({
            filme: e.target.value
        })
    }

    handleData = (e) => {
        this.setState({
            year: e.target.value
        })
    }

    render () {
        const { 
            Title, 
            Year, 
            Poster, 
            Plot, 
            Genre,
            Language,
            Country,
            Awards,
            Actors,
            Director,
            Runtime, } = this.state.filmes

        return (
            <div className="container cinema">
                <div className="cinema-form">
                <form onSubmit={this.renderMovie}>
                    <input 
                        type="text" 
                        onChange={this.handleFilme}
                        placeholder="Nome do filme/série"
                        name="filme"
                        value={this.state.filme}
                    />
                    <input 
                        type="text"
                        onChange={this.handleData}
                        placeholder="Ano (opcional)"
                        value={this.state.year}
                    />
                    <button type="submit">
                        Buscar
                    </button>
                </form>
                {!!this.state.filmes &&                 
                <div className="filme-content">                    
                    <h1>Nome: {Title}</h1>                    
                    <img src={Poster} alt="Filme"/>
                    <p><span>Ano:</span> {Year}</p>
                    <p><span>Enredo:</span> {Plot}</p>
                    <p><span>Gênero:</span> {Genre}</p>
                    <p><span>Lingua:</span> {Language}</p>
                    <p><span>País:</span> {Country}</p>
                    <p><span>Prêmios:</span> {Awards}</p>
                    <p><span>Atores/Atrizes:</span> {Actors}</p>
                    <p><span>Diretor:</span> {Director}</p>
                    <p><span>Tempo de filme:</span> {Runtime}</p>
                </div>
                }
            </div>
            </div>
        )
    }
}

export default Cinema