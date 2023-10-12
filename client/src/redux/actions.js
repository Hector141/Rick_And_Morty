import { REMOVE_FAV , FILTER, ORDER, SHOW_ALL_FAVORITES} from "./action-types"
import axios from "axios";




export const registerUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/rickandmorty/register', {
        email,
        password,
      });

      if (response.status === 201) {
        // Si la creación del usuario es exitosa, establece access en true
        dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
};




export const fetchFavorites = () => {
  const endpoint = 'http://localhost:3001/rickandmorty/favorites';
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      const favorites = response.data; // Los favoritos que recibes del servidor
      dispatch({ type: 'FETCH_FAVORITES_SUCCESS', payload: favorites });
    } catch (error) {
      console.log(error.message);
    }
  };
};



export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try {
        await axios.post(endpoint, character); 
  
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