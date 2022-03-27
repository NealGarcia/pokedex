import { Box, CircularProgress, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
import React, { Component } from 'react';
import { POKEMON_API_URL } from '../config';

const styles = (theme) => ({
    pokedexContainer: {
        height: '84vh',
        backgroundColor: 'black',
        color: 'white',
        marginTop: '75px',
        textAlign: 'center',
        borderRadius: '5px',
        paddingTop: '30px',
    },
    textTitle: {
        textTransform: 'upperCase',
    },
    pokemonImg: {
        width: '150px',
        height: '150px',
    }
})

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
            .then((response) => {
                if(response.status >= 200 && response.status < 300){
                    this.setState({pokemon: response.data})
                }
            })
    }
    render() {
        const { classes } = this.props
        const { pokemon } = this.state
        if(pokemon){
            const { name, sprites } = pokemon
            return(
                <Box >
                    <Box className = {classes.pokedexContainer}>
                        <Typography className = {classes.textTitle} variant="h3">{name}</Typography>
                        <img className = {classes.pokemonImg} src = {sprites.front_default} alt = "pokemon-sprite"></img>
                    
                    </Box>
                </Box>
            )
        }
        else{
            return <CircularProgress/>
        }
    }
}


export default withStyles(styles)(PokemonDetails);