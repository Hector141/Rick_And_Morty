import { useState } from "react";
import Validate from "./Validation.js";

import "./Form.css";

const Form = (props) => {



  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

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
  };

  return (
    <div className="back_form">
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
     
    </div>
  );
};

export default Form;
