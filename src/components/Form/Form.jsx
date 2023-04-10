import { useState } from "react"
import Validate from "./Validation.js"
import './Form.css';




const Form = (props) => {



    const [userData,setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors,setErrors] = useState({
        email: "",
        password: ""
    })


    function handleChange (event) {
        setUserData({
          ...userData,
          [event.target.name]: event.target.value,
        });
        setErrors(Validate({
            ...userData,
            [event.target.name]: event.target.value,
        }))
      };
      



      const handleOnSubmit = (event) => {
        event.preventDefault();
        const validationErrors = Validate(userData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
        }
        props.login(userData)
      };


   return (
    <form className="form" onSubmit={handleOnSubmit}>
       <p className="form_img" ></p>

        <label className="label_form" >EMAIL</label>
            <input className="input_form" name="email" type="email" placeholder="Email..." value={userData.email} onChange={handleChange}></input>
            {errors.email && <p className="error">{errors.email}</p>}
        <br></br>


        <label className="label_form"  >PASSWORD</label>
            <input className="input_form" name="password" type="password" value={userData.password} onChange={handleChange}></input>
            {errors.password && <p className="error">{errors.password}</p>}
        <br></br>
        <button className="boton_form" type="submit" disabled={!userData.email || !userData.password || errors.email || errors.password}>SUBMIT</button>
    </form>
   )
}

export default Form