import { Box, CircularProgress, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { useQuery } from 'react-query';
import { apiRequest } from '../../pages/api/api-request';
import { Movies } from './MovieList/movies';
import { Layout } from './Theme/layout';


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        flexContainer: {
            [theme.breakpoints.up('md')]: {
                justifyContent: 'space-evenly',
            },
            [theme.breakpoints.down('sm')]: {
                justifyContent: 'space-evenly', 
            },
        }
    })
);

export default function MovieListings() {
    const { isLoading, data } = useQuery('movieData', apiRequest);
    const classes = useStyles();
    
    if (isLoading) return <CircularProgress />;
  
    const movieData = data.results;
    return(
        <>
            <Layout>
                <Box className={classes.flexContainer} display="flex" flexWrap="wrap" p={3}>
                    {movieData.map(movie => (
                        <Box key={movie.id} p={1}>
                            <Movies 
                                image={movie.poster_path}
                                movieId={movie.id}
                                votes={movie.vote_average}
                                description={movie.overview}
                                title={movie.title}
                                releaseDate={movie.release_date}
                                language={movie.original_language}
                            />
                        </Box>
                    ))} 
                </Box>
            </Layout>
        </>  
    );
    
}