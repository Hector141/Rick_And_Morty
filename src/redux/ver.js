import { ADD_FAV, REMOVE_FAV, FILTER, SHOW_ALL_FAVORITES } from "../action-types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,               
                myFavorites: [...state.myFavorites, action.payload], 
                allCharacters: [...state.allCharacters, action.payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(character => character.id !== action.payload),
            }
        case FILTER:
            const filteredChar = state.myFavorites.filter(character => character.gender === action.payload);
            return{
                ...state,
                myFavorites: filteredChar,
            }
        case "ORDER":
            const allCharactersCopy = [...state,allCharacters]
            
            return{
                ...state,
                myFavorites: 
                payload === "A"
                ? allCharactersCopy.sort((a,b) => a.id - b.id)
                : allCharactersCopy.sort((a,b) => b.id - a.id)
            }

        case SHOW_ALL_FAVORITES:
            return {
              ...state,
              allCharacters: [...state.myFavorites]
            }

        default:
            return state
    }
}


export default reducer
