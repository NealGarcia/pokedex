import { Box } from '@material-ui/core';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { POKEMON_API_URL } from '../config';

function Pokedex(props) {
    // Fetch data from API
    useEffect(()=> {
        axios.get(`${POKEMON_API_URL}?limit=800`)
        .then((response) => {
            console.log(response.data)
        })
    }, [])

    return (
        <div>
            <Box>

            </Box>
        </div>
    );
}

export default Pokedex;