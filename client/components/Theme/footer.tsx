import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    flexContainer: {
        display: 'flex',
        height: '10rem',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#0a72ad',
        color: 'white',
    },
});


export default function Footer() {
    const classes = useStyles();

    return(
        <> 
            <Box className={classes.flexContainer} component="div"> 
                <Typography>Footer</Typography>
                <Typography>Privacy Policy</Typography>
                <Typography>Disclaimer</Typography>
                <Typography>Cookie Policy</Typography>
            </Box>
        </>
    );
}