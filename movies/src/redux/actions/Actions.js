import Types from './types';
import axios from 'axios';
//to be Refactored
const url = "https://api.themoviedb.org/3/movie";
const key = "c6a037cbccebd275ce5948aa040072fb";
//Real Time Date
export const updateDate = () => {
  return {
    type: Types.UPDATE_DATE,
    payload: new Date()
  }
}

//Get released Movies
export const getReleases = () => dispatch => {
  dispatch({
      type: Types.GET_ESTRENOS,
      payload: axios.get(`${ url }upcoming?api_key=${key}&language=en-US&page=1`)
  }) 
}

//Get Popular MOvies
