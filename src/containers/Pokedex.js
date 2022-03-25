import { Box, CircularProgress, Grid, makeStyles } from '@material-ui/core';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { IMG_API_URL, POKEMON_API_URL } from '../config';
import PokemonCard from '../components/PokemonCard';

const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: 'center',
        padding: "75px 10px 0px 10px",
        backgroundColor: 'rgb(68,68,68)'
    }
}))

function Pokedex(props) {
    const [pokemonData, setPokemonData] = useState([])
    const classes = useStyles()

    // Fetch data from API
    useEffect(()=> {
        axios.get(`${POKEMON_API_URL}?limit=800`)
        .then((response) => {
            // If status of response is successful
            if(response.status >= 200 && response.status < 300){
                const{ results } = response.data
                let newPokemonData = []
                results.forEach((pokemon, index) => {
                    index++
                    // Create new pokemon object
                    let pokemonObj = {
                        id: index,
                        url: IMG_API_URL + index + ".png",
                        name: pokemon.name
                    }
                    newPokemonData.push(pokemonObj)

                })
                setPokemonData(newPokemonData)
            }
        })
    }, [])

    return (
        <div>
            <Box>
                {/* if pokemonData is not null (truthy), loop over pokemon data and display */}
                {/* if pokemonData IS not yet loaded -> display loading icon from MUI  */}
                {pokemonData 
                ?  
                <Grid className = {classes.container} container spacing ={2}>
                    {pokemonData.map((pokemon) => {
                        return (
                            <PokemonCard key = {pokemon.id} pokemon = {pokemon} image = {pokemon.url}/> 
                        )
                    })}

                </Grid>
                : 
                <CircularProgress style = {{ marginTop: 100}}/>}
            </Box>
        </div>
    );
}

export default Pokedex;