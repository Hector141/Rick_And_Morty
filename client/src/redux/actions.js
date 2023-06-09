import { ADD_FAV,REMOVE_FAV , FILTER, ORDER, SHOW_ALL_FAVORITES} from "./action-types"
import axios from "axios";

export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
      try {
          const { data } = await axios.post(endpoint, character);

          return dispatch({
              type: ADD_FAV,
              payload: data,
          });
      } catch (error) {
          console.log(error.message);
      } 
  };
};

export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async (dispatch) => {
      try {
          const { data } = await axios.delete(endpoint);

          return dispatch({
              type: REMOVE_FAV,
              payload: data,
          });
      } catch (error) {
          console.log(error.message);
      };
  };
}

 

export function filterCards (gender){
    return{
        type: FILTER, 
        payload:gender
    }
}

export function orderCards (orden){
    return{
        type: ORDER,
        payload: orden
    }

}

export const showAllFavorites = () => ({
    type: SHOW_ALL_FAVORITES
  });