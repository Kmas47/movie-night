import React, { createContext, useReducer } from 'react';


const initialState: unknown = { arr: [] };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'LIKE':
            return {
                ...state,
                arr: [...state.arr, action.payload],
            }
            case 'UNLIKE':
            return {
                arr: [...state.arr.filter(movie => movie.movieId != action.payload.movieId)],
            }
            default:
                return state;
        }
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>
};

export { store, StateProvider }