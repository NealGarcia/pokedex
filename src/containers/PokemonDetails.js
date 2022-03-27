import { Box, Button, CircularProgress, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
import React, { Component } from 'react';
import { POKEMON_API_URL } from '../config';
import FavoriteIcon from '@material-ui/icons/Favorite'
import { WhereToVoteOutlined } from '@material-ui/icons';

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
    },
    pokemonInfoContainer: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
    },
    separator: {
        height: '0.01mm',
        width: '95%',
    },
    favorite: {
        height: 50,
        width: 100,
        marginTop: 15,
    },
    text: {
        fontSize: 30,
        color: 'white',
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
            const { name, sprites, height, weight, types } = pokemon
            return(
                <Box >
                    <Box className = {classes.pokedexContainer}>
                        <Typography className = {classes.textTitle} variant="h3">{name}</Typography>
                        <img className = {classes.pokemonImg} src = {sprites.front_default} alt = "pokemon-sprite"></img>
                    </Box>
                    <Box className = {classes.pokemonInfoContainer}>
                        <hr className = {classes.separator}/>
                        <Grid container>
                            <Grid item md = {1}>
                                <Button className = {classes.favorite}>
                                    <FavoriteIcon style = {{ color: "white", fontSize: 30}}/>
                                </Button>
                            </Grid>
                            <Grid item md = {2}>
                                <Typography className = {classes.text}>Name:<br/>{name}</Typography>
                            </Grid>
                            <Grid item md = {2}>
                                <Typography className = {classes.text}>Height:<br/>{height}m</Typography>
                            </Grid>
                            <Grid item md = {2}>
                                <Typography className = {classes.text}>Weight:<br/>{weight}kg</Typography>
                            </Grid>

                            {types.map((pokemonType) => {
                                const { name } = pokemonType.type
                                return (
                                    <Grid item md = {2}>
                                        <Typography className = {classes.text}>Type:<br/>{name}</Typography>
                                    </Grid>
                                )
                            
                            })}
                        </Grid>
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