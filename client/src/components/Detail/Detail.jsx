import axios from "axios"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import './Detail.css';


//const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
//const Apy_key = "b601c19982bd.d1ff5d01c384f0beea8b"

const Detail = ()=> {
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className="container">
         <div className="cont_det">
            <h1 className="detail_h1">Detail</h1>
         <h2 className="h" >Name: {character?.name}</h2>
         <h2 className="h">Status: {character?.status}</h2>
         <h2 className="h">Species: {character?.species}</h2>
         <h2 className="h">Gender: {character?.gender}</h2>
         <h2 className="h">Origin: {character?.origin?.name}</h2>
         </div>
         <img className="detail_img" src={character?.image} alt={character.name} />
        </div>
    )
}

export default Detail