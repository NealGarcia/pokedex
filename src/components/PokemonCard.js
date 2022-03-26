import { Card, Grid, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'
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
    },
    link:{
        textDecoration: "none",
    }
}))

function PokemonCard(props) {
    const classes = useStyles()
    const { pokemon, image } = props
    const { id, name } = pokemon
    return (
        // xs small devices take up 12 slots; sm devices take up 2 slots 
        <Grid item xs ={12} sm ={2}> 
            <Link className = {classes.link} to = {"/pokemon/" + id}>
                <Card className = {classes.card}>
                    <CardMedia className = {classes.cardMedia} image = {image}></CardMedia>
                    <CardContent className = {classes.cardContent}>
                        <Typography>
                            {name}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
}

export default PokemonCard;