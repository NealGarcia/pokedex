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
            const { name } = pokemon
            return(
                <Box >
                    <Box className = {classes.pokedexContainer}>
                        <Typography className = {classes.textTitle} variant="h1">{name}</Typography>
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