import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

// w/ MUI - add styles in JS using makeStyles 
const useStyles = makeStyles((theme) => ({
    AppBar: {
        backgroundColor: 'black'
    },
    link: {
        textDecoration: 'none'
    },
    title: {
        cursor: 'pointer',
        color: 'white',

    }
}))

function AppNav(props) {
    const classes = useStyles() // store useStyles within 'classes' to use as class

    return (
        <AppBar className = {classes.AppBar} position = "fixed"> 
            <Toolbar>
                <Link to = '/' className={classes.link}>
                    <Typography variant = "h6" className = {classes.title}>
                        Pokedex
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default AppNav;