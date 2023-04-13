import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route,Routes } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail';
import Form from './components/Form/Form';
import { useNavigate, useLocation } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';


const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const Apy_key = "b601c19982bd.d1ff5d01c384f0beea8b"

function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'hector@gmail.com';
   const PASSWORD = 'contr123';
   const [characters, setCharacters] = useState([]);
   const location = useLocation()


   function login(userData) {
     if (userData.password === PASSWORD && userData.email === EMAIL) {
       setAccess(true);
       navigate('/home');
     }
   }
 
   useEffect(() => {
     !access && navigate('/');
   }, [access, navigate]);
 
   const onSearch = (id) => {
     axios(`${URL_BASE}/${id}?key=${Apy_key}`).then(({ data }) => {
       if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
       } else {
         window.alert('¡No hay personajes con este ID!');
       }
     });
   };
 
   const onClose = (id) => {
     const charactersFiltered = characters.filter(
       (character) => character.id !== (id)
     );
     setCharacters(charactersFiltered);
   };
 
   return (
     <div className="App">
      {
        location.pathname !== "/" ? <Nav onSearch={onSearch} access={access} setAccess={setAccess} /> : null
      }
       <Routes>
         <Route path="/" element={<Form login={login}  />} />
         <Route
           path="/home"
           element={<Cards characters={characters} onClose={onClose} />}
         ></Route>
         <Route path="/favorites" element={<Favorites />} />
         <Route path="/About" element={<About />}></Route>
         <Route path="/Detail/:id" element={<Detail />}></Route>
       </Routes>
     </div>
   );
 }
 
 export default App;