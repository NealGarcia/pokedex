import { Card, Grid, CardMedia, CardContent, Typography } from '@material-ui/core';
import React from 'react';

function PokemonCard(props) {
    const { pokemon, image } = props
    const { id, name } = pokemon
    return (
        // xs small devices take up 12 slots; sm devices take up 2 slots 
        <Grid item xs ={12} sm ={2}> 
            <Card>
                <CardMedia image = {image}></CardMedia>
                <CardContent>
                    <Typography>
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default PokemonCard;