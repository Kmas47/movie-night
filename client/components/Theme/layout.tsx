import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        layout: {
            backgroundColor: "white",
            [theme.breakpoints.up('xl')]: {
                margin: '0 20%',
            },
            [theme.breakpoints.down('lg')]: {
                margin: '0 10%',
            },
            [theme.breakpoints.down('md')]: {
                margin: '0 5%',
            },
            [theme.breakpoints.down('sm')]: {
                margin: '0%',
            },
        },
        
    })
);


export const Layout = ({ children }) => {
    const classes = useStyles();
    return(
        <Box className={classes.layout}>{children}</Box>
    );
}