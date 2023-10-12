import { useState } from "react";
import Validate from "./Validation.js";
import { registerUser } from "../../redux/actions.js"
import { useDispatch } from 'react-redux';

import "./Form.css";

const Form = (props) => {

  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });


  
  const handleRegisterChange = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      Validate({
        ...registerData,
        [event.target.name]: event.target.value,
      })
    );
  };
  

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validate(registerData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(registerUser(registerData.email, registerData.password));
      props.setUserRegister(false);
    }
  };
  



  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      Validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validate(userData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      props.login(userData);
    }
   }




  return (
    <div className="back_form">


      {props.userRegister ? (
       
        <form className="form" onSubmit={handleRegisterSubmit}>
        <p className="form_img"></p>
        <label className="label_form">EMAIL DE REGISTRO</label>
        <input
          className="input_form"
          name="email"
          type="email"
          placeholder="Email..."
          value={registerData.email}
          onChange={handleRegisterChange} 
        />
              {errors.email && <p className="error">{errors.email}</p>}
          <br />
        <label className="label_form">CONTRASEÑA</label>
        <input
          className="input_form"
          name="password"
          type="password"
          placeholder="Contraseña..."
          value={registerData.password}
          onChange={handleRegisterChange} 
        />
         {errors.password && <p className="error">{errors.password}</p>}
        <button
          className="boton_form"
          type="submit"
          disabled={!registerData.email || !registerData.password || errors.email || errors.password}
          
        >
          REGISTER
        </button>
      </form>


      ) : (
        // Formulario de inicio de sesión
        <form className="form" onSubmit={handleOnSubmit}>
          <p className="form_img"></p>
    
          <label className="label_form">EMAIL</label>
          <input
            className="input_form"
            name="email"
            type="email"
            placeholder="Email..."
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <br />
    
          <label className="label_form">PASSWORD</label>
          <input
            className="input_form"
            name="password"
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
          <br />
          <button
          className="boton_form"
          type="submit"
          disabled={!userData.email || !userData.password || errors.email || errors.password}
        >
          SUBMIT
        </button>
      </form>
  
      )}
    </div>
  );
};

export default Form;
