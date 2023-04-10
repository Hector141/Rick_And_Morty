import { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handleChange = (event)=>{
      setId(event.target.value)

   }

   return (
      <div className="bar">
        <input className="bar_ser" type='search' onChange={handleChange} value = {id}/>
         <button className="bar_b" onClick={()=> {onSearch(id); setId("")}}>Agregar</button>   
      </div>
   );
}
