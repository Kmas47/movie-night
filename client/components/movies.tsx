import { Button, List, ListItem, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Image from 'next/image';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { movieYear } from '../../utils/helpers';


export interface IMovieProps {
    movieId: number;
    image: string;
    title: string;
    description: string;
    votes:number;
    releaseDate: string;
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
    }, 
});

export default function Movies({
    movieId,
    image,
    title,
    votes,
    description,
    releaseDate,
    }: IMovieProps) {

    const classes = useStyles();
    const [liked, setLiked] = useState('#dedcdc')

    function handleLike(name) {
        console.log(name);
        if(liked == '#dedcdc') {
            setLiked('red'); 
        } 
        else setLiked('#dedcdc');
    }

    return(
        <>
            <List className={classes.flexContainer} component="nav">
                <ListItem className={classes.content}>
                    <Button key={movieId} onClick={() => handleLike(movieId)}>
                        <FavoriteIcon fontSize="large" key={movieId} style={{ color: liked }}  />
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