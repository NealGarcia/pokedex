import { Box } from '@material-ui/core';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

function Pokedex(props) {
    // Fetch data from API
    useEffect(()=> {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=800")
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