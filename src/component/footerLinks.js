import "../App.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';



function Footer() {
  return (
      <ul className="d-flex flex-wrap list-unstyled social-icons">
          <li><a href="https://www.linkedin.com/in/nikolas-g-83b802106/" className="linkedin" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
          <li><a href="https://github.com/nikolasgordon" className="github" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
          <li><a href="mailto:nikolasmgordon@gmail.com?Subject=Hello" target="_top"><i className="fa fa-at"></i></a></li>
      </ul>
  );
}

export default Footer;