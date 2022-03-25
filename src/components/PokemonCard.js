import { Card, Grid, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        margin: "auto",
        width: 130,
        height: 130
    },
    card:{
        cursor: "pointer",
        backgroundColor: "black",
        color: "white",
        "&:hover": {
            backgroundColor: 'rgb(90, 90, 90)'
        }
    },
    cardContent:{
        textAlign: "center",
    }
}))

function PokemonCard(props) {
    const classes = useStyles()
    const { pokemon, image } = props
    const { id, name } = pokemon
    return (
        // xs small devices take up 12 slots; sm devices take up 2 slots 
        <Grid item xs ={12} sm ={2}> 
            <Card className = {classes.card}>
                <CardMedia className = {classes.cardMedia} image = {image}></CardMedia>
                <CardContent className = {classes.cardContent}>
                    <Typography>
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default PokemonCard;