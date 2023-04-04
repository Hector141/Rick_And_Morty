import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Route,Routes } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';


function App() {

   const [characters,setCharacters] = useState([]); 
   
   const onSearch = (id)=> {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   const onClose = (id)=>{
      const charactersFiltered = characters.filter(character => 
      character.id !== Number(id))
      setCharacters(charactersFiltered)
   }


   return (
      <div className='App'>
         <Nav onSearch={onSearch}></Nav>
         <Routes>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose} />}> </Route>
            <Route path='/About' element={<About/>}> </Route>
            <Route path='/Detail/:id' element={<Detail/>}> </Route>
         </Routes>
        
      </div>
   );
}

export default App;
