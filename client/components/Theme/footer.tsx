import { Box, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        flexContainer: {
            display: 'flex',
            height: '10rem',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: theme.palette.primary.main,
            color: 'white',
        },
    })
);


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