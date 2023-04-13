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
                allCharacters: state.allCharacters.filter(character => character.id !== action.payload)
            }
        case FILTER:
            const filteredChar = state.allCharacters.filter(character => character.gender === action.payload);
            return{
                ...state,
                myFavorites: filteredChar,
            }
        case "ORDER":
            const orderCharacters = state.myFavorites.sort((a,b)=>{
                if(a.id > b.id){
                    return "A" === action.payload ? 1 : -1;
                }
                if(a.id < b.id){
                    return "D" === action.payload ? 1 : -1;
                }
                return 0
            });
            return{
                ...state,
                myFavorites: orderCharacters,
            }

        case SHOW_ALL_FAVORITES:
            return {
              ...state,
              myFavorites: [...state.allCharacters]
            }

        default:
            return state
    }
}


export default reducer