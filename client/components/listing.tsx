import { Box, CircularProgress, Divider } from '@material-ui/core';
import React from 'react';
import { useQuery } from 'react-query';
import { apiRequest } from '../../pages/api/api-request';
import ListHeader from './MovieList/listHeader';
import { Movies } from './MovieList/movies';
import { Layout } from './Theme/layout';


export default function MovieListings() {
    const { isLoading, data } = useQuery('movieData', apiRequest);
    
    if (isLoading) return <CircularProgress />;
  
    const movieData = data.results;
    return(
        <>
            <Layout>
                <Box>
                   <ListHeader />
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
                        color={null}
                    />
                    <Divider variant="fullWidth" />
                </Box>
                ))} 
            </Layout>
        </>  
    );
    
}