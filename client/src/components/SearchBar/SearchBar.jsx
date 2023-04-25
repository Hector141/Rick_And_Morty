import { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");
   const [searchedIds, setSearchedIds] = useState([]);

   const handleChange = (event)=>{
      setId(event.target.value)
   }

   const handleSearch = () => {
      if (searchedIds.includes(id)) {
         alert("Ya tienes esa carta, busca otra :D");
      } else {
         setSearchedIds([...searchedIds, id]);
         onSearch(id);
         setId("");
      }
   }

   return (
      <div className="bar">
        <input className="bar_ser" type='search' onChange={handleChange} value={id}/>
         <button className="bar_b" onClick={handleSearch}>Agregar</button>   
      </div>
   );
}
