import { IMovieProps } from "./movie";

export interface IProps {
    state: IState;
    dispatch: Function;
}


export interface IState {
    arr: IMovieProps[];
}