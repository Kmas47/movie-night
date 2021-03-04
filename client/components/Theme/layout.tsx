import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        layout: {
            top: '4rem',
            backgroundColor: "white",
            [theme.breakpoints.up('xl')]: {
                margin: '3% 20% 0 20%',
            },
            [theme.breakpoints.down('lg')]: {
                margin: '3% 10% 0% 10%',
            },
            [theme.breakpoints.down('md')]: {
                margin: '4% 5% 0 5%',
            },
            [theme.breakpoints.down('sm')]: {
                margin: '10% 0% 0% 0%',
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