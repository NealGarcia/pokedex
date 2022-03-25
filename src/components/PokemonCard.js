import { Card, Grid, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        margin: "auto",
        width: 130,
        height: 130
    }
}))

function PokemonCard(props) {
    const classes = useStyles()
    const { pokemon, image } = props
    const { id, name } = pokemon
    return (
        // xs small devices take up 12 slots; sm devices take up 2 slots 
        <Grid item xs ={12} sm ={2}> 
            <Card>
                <CardMedia className = {classes.cardMedia} image = {image}></CardMedia>
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