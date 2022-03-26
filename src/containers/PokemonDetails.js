import axios from 'axios';
import React, { Component } from 'react';
import { POKEMON_API_URL } from '../config';

class PokemonDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            pokemon: null
        }
    }

    componentDidMount(){
        const { match } = this.props
        const { id } = match?.params
        axios.get(POKEMON_API_URL + "/" + id)
    }

    render() {
        return (
            <div>
                <h1 style = {{marginTop: 200}}>Test</h1>
            </div>
        );
    }
}

export default PokemonDetails;