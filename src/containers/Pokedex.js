import { Box, CircularProgress } from '@material-ui/core';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { IMG_API_URL, POKEMON_API_URL } from '../config';

function Pokedex(props) {
    const [pokemonData, setPokemonData] = useState([])

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
                {pokemonData ? pokemonData.map(pokemon => {
                    return <h1>{pokemon.name}</h1>
                }) : <CircularProgress />}
            </Box>
        </div>
    );
}

export default Pokedex;