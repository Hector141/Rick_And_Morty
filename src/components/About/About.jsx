import React from "react"
import avatar from "../../para_rick/avatar.jpg"
import './About.css'

const About = ()=> {

    return(
        <div className="cont_about">
        <img className="avatar" src={avatar} alt="avatar"></img>
        <div className="cont_lore">
        <h1 className="h1_about">
           Mi nombre es Cardoso Hector y este es mi avatar
        </h1>
        <p className="p_about"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam saepe aspernatur, voluptatibus omnis cupiditate 
        officia, magni at, illum reiciendis iure nesciunt? Reiciendis, facere? Ullam soluta iusto mollitia officiis tempora delectus. </p></div>
        
     </div>
    )

}


export default About 