import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { movieYear } from '../../../utils/helpers';
import { store } from '../../store/store';
import { IMovieProps } from '../../../@types/movie';
import { usehandleLike } from '../../store/handleLike';
import ShareIcon from '@material-ui/icons/Share';


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            maxWidth: 300,
            [theme.breakpoints.down('sm')]: {
                maxWidth: "100%",
            },
        },
        justifyContent: {
            justifyContent: 'space-between',
        },
    })
);

export function Movies({
    movieId,
    image,
    title,
    votes,
    description,
    releaseDate,
    color,
    language,
    }: IMovieProps) {

    const classes = useStyles();
    
    const globalState = useContext(store);
    const { dispatch }: any = globalState;
    const [liked, setLiked] = useState('#dedcdc');

    
    const data = {
        movieId: movieId,
        poster: image,
        title: title,
        ratings: votes,
        description: description,
        relaseDate: releaseDate,
        color: liked,
        language: language,
    }

    return(
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={title}
                    height="300"
                    image={process.env.NEXT_PUBLIC_IMAGE_URL+image}
                    title={title}
                    />
                    <CardContent>
                        <Box display="flex" justifyContent="space-between">
                            <Typography gutterBottom variant="h5" component="h2">
                                {title} ({movieYear(releaseDate)})
                            </Typography>
                            <Typography gutterBottom variant="caption" component="caption">
                                {language}
                            </Typography>
                        </Box>
                    <Typography gutterBottom variant="subtitle1"  component="p">
                        Ratings: {votes}/10
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.justifyContent}>
                    <Button size="small" onClick={() => usehandleLike(data, setLiked, dispatch)} >
                        <FavoriteIcon fontSize="large" style={{ color: (color ? color : liked) }} />
                    </Button>
                    <Button size="small" color="primary">
                        <ShareIcon fontSize="large"  />
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}
