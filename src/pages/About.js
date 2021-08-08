import "../App.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../imgs/person-male.png"
import { useEffect } from "react";

function About() {
  useEffect(()=>{
    document.title ="Nikolas Gordon - About"
  });
  return (
      <div className="container d-flex flex-wrap ">
          <img src={image} alt="Pictures" className="mt-5"/>
          <div className="container ml-5 mr-5">
            <p className="name ">I am a recent Grad in Computer Science. Im very diversified in my interests but my main focus is in 
            Software Engineering and Machine Learning/Data Mining processes.
            I have skills with various programming languages such as Java, C#, Javascript, Python and frameworks such as 
            Express.js, Django, and React. I have also done some work with R and MATLAB. </p>
          </div>
          
      </div>
  );
}

export default About;