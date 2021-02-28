import { Box, CircularProgress, createStyles, Divider, List, ListItem, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { apiRequest } from '../../pages/api/api-request';
import Movies from './movies';

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
        layout: {
            backgroundColor: "#fcfcfc",
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
        heading: {
            backgroundColor: "#ffc356",
            display: "flex",
        },
    })
);


export default function MovieListings() {
    const { isLoading, data } = useQuery('movieData', apiRequest);
    const classes = useStyles();
    
    if (isLoading) return <CircularProgress />;
  
    const movieData = data.results;
    return(
        <>
            <Box className={classes.layout}>
                <Box>
                    <List className={classes.heading} component="nav">
                        <ListItem className={classes.content}><Typography className={classes.title}>Add to Favourites</Typography></ListItem>
                        <ListItem className={classes.content}><Typography className={classes.title}>Poster</Typography></ListItem>
                        <ListItem className={classes.content}><Typography className={classes.title}>Movie Title</Typography></ListItem>
                        <ListItem className={classes.content}><Typography className={classes.title}>Movie Ratings</Typography></ListItem>
                        <ListItem className={classes.description}><Typography className={classes.title}>Movie Description</Typography></ListItem>
                    </List>
                    <Divider variant="fullWidth" />
                    </Box>   
                    {movieData.map(movie => (
                    <Box key={movie.id}>
                        <Movies 
                            image={movie.poster_path}
                            movieId={movie.id}
                            votes={movie.vote_average}
                            description={movie.overview}
                            title={movie.title}
                            releaseDate={movie.release_date}
                        />
                        <Divider variant="fullWidth" />
                    </Box>
                    ))} 
            </Box>
        </>  
    );
    
}