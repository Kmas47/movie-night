import { createStyles, Divider, List, ListItem, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        title: {
        fontWeight: 500,
        },
        description: {
        width: '40%',
        },
        content: {
        width: '15%',
        justifyContent: 'center',
        }, 
        heading: {
            backgroundColor: theme.palette.secondary.main,
            display: "flex",
        },
    })
);

export default function ListHeader() {
    const classes = useStyles();

    return(
        <>
             <List className={classes.heading} component="nav">
                        <ListItem className={classes.content}><Typography className={classes.title}>Add to Favourites</Typography></ListItem>
                        <ListItem className={classes.content}><Typography className={classes.title}>Poster</Typography></ListItem>
                        <ListItem className={classes.content}><Typography className={classes.title}>Movie Title</Typography></ListItem>
                        <ListItem className={classes.content}><Typography className={classes.title}>Movie Ratings</Typography></ListItem>
                        <ListItem className={classes.description}><Typography className={classes.title}>Movie Description</Typography></ListItem>
            </List>
            <Divider variant="fullWidth" />
        </>
    );
}