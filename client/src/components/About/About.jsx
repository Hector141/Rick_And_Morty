import React from "react";
import avatar from "../../para_rick/avatar.jpg";
import "./About.css";
import gmail from "../../para_rick/gmail.png"
import linken from "../../para_rick/linkenima.png"
import git from "../../para_rick/git.png"

const About = () => {
  return (
    <div className="cont_about">
      <img className="avatar" src={avatar} alt="avatar"></img>
      <div className="cont_lore">
        <h1 className="h1_about">
          Mi nombre es Cardoso Hector y este es mi avatar
        </h1>
        <p className="p_about">
          Hola, Me llamo Hector Cardoso, soy un Full Stack developer con muchas
          ganas de afrontar desafios y formar parte de nuevos equipos. Me
          considero una persona creativa, con un firme deseo de aprender y una
          pasión por la resolución de problemas. Aunque soy un desarrollador
          Full Stack, me siento más cómodo trabajando en el front-end 😄.
          Siempre estoy inmerso en un proceso de aprendizaje constante,
          explorando y dominando nuevas tecnologías para aplicarlas en diversos
          proyectos


          Puedes contactarme por:
<br></br>
<a href="mailto:hectorcardoso18@outlook.com" target="blank">
  <img className="about_imgs" src={gmail} alt="gmail" />
</a>
<a href="https://www.linkedin.com/in/hector-cardoso-503531264/" target="blank">
  <img className="about_imgs" src={linken} alt="LinkedIn" />
</a>
<a href="https://github.com/Hector141" target="blank">
  <img className="about_imgs" src={git} alt="GitHub" />
</a>

        </p>
      </div>
    </div>
  );
};

export default About;
