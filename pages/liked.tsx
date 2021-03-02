import React, { useContext } from 'react';
import ListHeader from '../client/components/MovieList/listHeader';
import { Movies } from '../client/components/MovieList/movies';
import { Layout } from '../client/components/Theme/layout';
import { Page } from '../client/components/Theme/page';
import { store } from '../client/store/store';


export default function MyFavourites() {
    const globalState = useContext(store);
    const { dispatch } = globalState;

    return(
        <>
            <Page>
                <Layout>
                    <ListHeader />
                    {globalState.state.arr.map(value => (
                        <Movies 
                        movieId={value.movieId}
                        image={value.poster}
                        votes={value.ratings}
                        description={value.description}
                        title={value.title}
                        releaseDate={value.relaseDate}
                        color={'red'}
                        />
                    ))}
                </Layout>
            </Page>
        </>
    );
}