import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import audioFile from "./para_rick/music.mp3";
import "./App.css";

import { useDispatch } from "react-redux";
import { fetchFavorites } from "./redux/actions";

//const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
//const Apy_key = "b601c19982bd.d1ff5d01c384f0beea8b"

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const dispatch = useDispatch();

  const [userRegister, setUserRegister] = useState(false);


  useEffect(() => {
    // Al cargar la aplicación, obtén los favoritos desde el servidor
    dispatch(fetchFavorites());
  }, [dispatch]);

  const audioRef = useRef(null);
  useEffect(() => {
    audioRef.current.src = audioFile;
    audioRef.current.volume = 0.2;
  }, []);

  function playAudio() {
    const btn = document.querySelector(".music_btn");
    if (audioRef.current.paused) {
      audioRef.current.play();
      btn.classList.add("active");
    } else {
      audioRef.current.pause();
      btn.classList.remove("active");
    }
  }

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );

      if (!data) throw new Error("Hubo un error");

      const { access } = data;
      setAccess(access);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  const onEnterAsVisitor = () => {
    setAccess(true);
    navigate("/home");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (!data) throw Error("No se encontró ningún personaje con ese ID");
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(charactersFiltered);
  };


  return (
    <div className="App">
      <button className="music_btn" onClick={playAudio}></button>
      <audio ref={audioRef} loop />

      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} access={access} setAccess={setAccess} />
      ) : null}
      <Routes>
        <Route
          path="/"
          element={<Form login={login} userRegister={userRegister} setUserRegister={setUserRegister}/>}
        />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/About" element={<About />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>

      {location.pathname === "/" && (
        <button className="button-visitor" onClick={onEnterAsVisitor}>
          Enter as a visitor
        </button>
      )}
      {location.pathname === "/" && (
        <button
          className="button-visitor"
          onClick={() => setUserRegister((prevState) => !prevState)}
        >
          {userRegister ? "Sign In" : "Sign Up"}
        </button>
      )}
    </div>
  );
}

export default App;
