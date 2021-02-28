import { Avatar, Link, List, ListItem, ListItemAvatar, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    flexContainer: {
        height: '4rem',
        display: 'flex',
        backgroundColor: '#0a72ad',
    },
    textColor: {
        color: 'white',
    },
});

export default function Header() {
    const classes = useStyles();
    return(
        <>
            <List className={classes.flexContainer} component="nav"> 
                <ListItem>
                    <Link href="/" underline='none'>
                        <Typography className={classes.textColor}>Home</Typography>
                    </Link>
                </ListItem>
                <ListItem> 
                    <Link href="/liked" underline='none'>
                        <Typography className={classes.textColor}>My Favourites</Typography>
                    </Link>
                </ListItem>
                <ListItemAvatar>
                    <Avatar alt="Avtar" src="" />
                </ListItemAvatar>
            </List> 
        </>
    );
}