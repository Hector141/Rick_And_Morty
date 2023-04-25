import { Link } from "react-router-dom";
import './Card.css'
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({ id, name, status, species, gender, origin, image, onClose, allCharacters, addFav, removeFav }) {
  
const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    allCharacters.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [allCharacters,id]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image });
    }
  }



  return (
    <div className="card">
      <button className="card_x" onClick={() => onClose(id)}>X</button>
      <button className="btn_fav" onClick={handleFavorite}>{isFav ?"❤️" :"🤍" }</button>
  
      <Link to={`/detail/${id}`} >
        <img className="card_img" src={image} alt={name} />
      </Link>
      <div className="card_cont">
        <h2>Name: {name}</h2>
        <h2>Status: {status}</h2>

        <h2>Gender: {gender}</h2>

      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allCharacters: state.allCharacters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character))
    },
    removeFav: (id) => {
      dispatch(removeFav(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
