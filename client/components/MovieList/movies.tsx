import { Button, List, ListItem, makeStyles, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { movieYear } from '../../../utils/helpers';
import { store } from '../../store/store';


export interface IMovieProps {
    movieId: number;
    image: string;
    title: string;
    description: string;
    votes:number;
    releaseDate: string;
    color: string;
}

const useStyles = makeStyles({
    title: {
        fontWeight: 500,
    },
    description: {
        width: '40%',
    },
    flexContainer: {
        display: 'flex',
    },
    content: {
        width: '15%',
        justifyContent: 'center',
        textAlign: 'center'
    }, 
});

export function Movies({
    movieId,
    image,
    title,
    votes,
    description,
    releaseDate,
    color,
    }: IMovieProps) {

    const classes = useStyles();
    
    const globalState = useContext(store);
    const { dispatch } = globalState;
    const [liked, setLiked] = useState('#dedcdc');

    function handleLike(movieData) {
    
        if (liked == '#dedcdc') {
             setLiked('red');
             dispatch({type: 'LIKE', payload: data})
            }
            else {
                setLiked('#dedcdc');
            }
    }

    const data = {
        movieId: movieId,
        poster: image,
        title: title,
        ratings: votes,
        description: description,
        relaseDate: releaseDate,
        color: color,
    }
    console.log(liked);
    return(
        <>
            <List className={classes.flexContainer} component="nav">
                <ListItem className={classes.content}>
                    <Button key={movieId} onClick={() => handleLike(data)}>
                        <FavoriteIcon fontSize="large" key={movieId} style={{ color: (color ? color : liked) }}  />
                    </Button>
                </ListItem>
                <ListItem className={classes.content}> 
                    <Image alt={title} src={process.env.NEXT_PUBLIC_IMAGE_URL+image} height={100} width={100} />
                </ListItem>
                <ListItem className={classes.content}><Typography>{title} ({movieYear(releaseDate)})</Typography></ListItem>
                <ListItem className={classes.content}><Typography>{votes}/10</Typography></ListItem>
                <ListItem className={classes.description}><Typography>{description}</Typography></ListItem>
            </List>
        </>
    );

}