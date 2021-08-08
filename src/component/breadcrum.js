import "../App.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Pdf from "../documents/resumeeNG2021.pdf";

function Breadcrum() {
  return (
      <ul className="list-unstyled breadcrumb tab">
          <li className="name"><Link to="/">Home</Link></li>
          <li className="name"><Link to="/About">About Me</Link></li>
          <li className="name"><a href = {Pdf} target = "_blank" rel="noreferrer">CV</a></li>
          <li className="name"><Link to="/Projects">Projects</Link></li>
      </ul>
  );
}

export default Breadcrum;