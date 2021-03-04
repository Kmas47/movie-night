export interface IMovieProps {
    relaseDate?: string;
    ratings?: number;
    poster?: string;
    movieId?: number;
    image?: string;
    title?: string;
    description?: string;
    votes?: number;
    releaseDate?: string;
    color?: string;
    language?: string;
}

export interface IMovie {
    state: IMovieState;
    dispatch: Function;
}

export interface IMovieState {
    arr: IMovieProps[];
}