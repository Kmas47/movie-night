import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { useContext } from 'react';
import { IMovie } from '../@types/movie';
import { IProps } from '../@types/store';
import MovieCard from '../client/components/MovieList/movieCard';
import { Layout } from '../client/components/Theme/layout';
import { Page } from '../client/components/Theme/page';
import { store } from '../client/store/store';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        flexContainer: {
            [theme.breakpoints.down('sm')]: {
                justifyContent: 'space-evenly' 
            },
        }
    })
);

export default function MyFavourites() {
    const globalState: any = useContext(store);
    const classes = useStyles();

    return(
        <>
            <Page>
                <Layout>
                    <Box className={classes.flexContainer} display='flex' flexWrap='wrap' p={3}>
                        {globalState.state.arr.map(movie => (
                            <Box key={movie.movieId} p={1}>
                                    <MovieCard 
                                        movieId={movie.movieId}
                                        image={movie.poster}
                                        votes={movie.ratings}
                                        description={movie.description}
                                        title={movie.title}
                                        releaseDate={movie.relaseDate}
                                        color={movie.color}
                                        language={movie.language}
                                    />
                            </Box>
                        ))}
                    </Box>
                </Layout>
            </Page>
        </>
    );
}