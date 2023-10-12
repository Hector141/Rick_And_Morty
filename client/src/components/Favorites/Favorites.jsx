import React from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import { removeFav } from "../../redux/actions";
import './favorite.css'
import { useDispatch } from "react-redux";
import { filterCards, orderCards, showAllFavorites } from "../../redux/actions";
import { useState, useEffect } from "react";
import { fetchFavorites } from '../../redux/actions';

function Favorites({ myFavorites, removeFav }) {
  const handleCardClose = (id) => {
    removeFav(id);
  }


  const [aux,setAux] = useState(false);


const dispatch = useDispatch();


useEffect(() => {
  // Al cargar la aplicación, obtén los favoritos desde el servidor
  dispatch(fetchFavorites());
}, [dispatch]);

function handleOrder(event){
  dispatch(orderCards(event.target.value))
  
  setAux(!aux)
}

function handleFilter(event) {
  if (event.target.value === "AllCharacters") {
    dispatch(showAllFavorites());
  } else {
    dispatch(filterCards(event.target.value));
  }
}


  return (
    <div className="contu">
      <select onChange={handleOrder} className="select">
        <option value="A">Ascendente</option>
        <option value="B">Desendente</option>
      </select>

      <select onChange={handleFilter} className="select">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
        <option value="AllCharacters">AllCharacters</option>
      </select>

      <h1>My Favorites</h1>
      <div className="card-container">
        {myFavorites?.map((favorite) => (
          <Card 
            key={favorite.id}
            id={favorite.id}
            name={favorite.name}
            image={favorite.image}
            status={favorite.status}
            gender={favorite.gender}
            onClose={handleCardClose}
            className="carta"
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
