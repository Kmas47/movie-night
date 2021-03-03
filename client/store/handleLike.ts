export function usehandleLike(movieData ,setLiked, dispatch) {
   
    if(movieData.color == 'red') {
        if(setLiked) setLiked('#dedcdc');
        movieData.color = '#dedcdc';
        dispatch({type: 'UNLIKE', payload: movieData}); 
    }
    else {
        if(setLiked) setLiked('red');
        movieData.color = 'red';
        dispatch({type: 'LIKE', payload: movieData});
    }
}