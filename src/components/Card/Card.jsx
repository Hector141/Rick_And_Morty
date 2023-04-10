import { Link } from "react-router-dom";
import './Card.css'

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div className="card">
       <button className="card_x" onClick={()=>onClose(id)}>X</button> 

       <Link to={`/detail/${id}`} >
       <img className="card_img" src={image} alt={name} />
                  </Link>
         <div className="card_cont">
         <h2 >Name: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         </div>
        
  

      </div>
   );
}
