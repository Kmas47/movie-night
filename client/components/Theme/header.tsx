import { Avatar, createStyles, List, ListItem, ListItemAvatar, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        flexContainer: {
            height: '4rem',
            display: 'flex',
            backgroundColor: theme.palette.primary.main,
        },
        textColor: {
            color: 'white',
            '&:hover': {
                cursor: 'pointer',
            },
        },
        home: {
            width: '80%',
            [theme.breakpoints.down('md')]: {
                width: '70%',
            },
            [theme.breakpoints.down('sm')]: {
                width: '60%',
            },
        },
    })
);

export default function Header() {
    const classes = useStyles();
    return(
        <>  
            <Head>
                <title>Movie Night</title>
            </Head>
            <List className={classes.flexContainer} component="nav"> 
                <ListItem className={classes.home}>
                    <Link href="/">
                        <Typography className={classes.textColor}>Home</Typography>
                    </Link>
                </ListItem>
                <ListItem> 
                    <Link href="/liked">
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