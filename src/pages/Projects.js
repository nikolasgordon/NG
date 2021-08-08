import "../App.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card  from 'react-bootstrap/Card';
import pic1 from "../imgs/gforce.png";
import pic2 from "../imgs/index.jpg";
import { useEffect } from "react";

function Projects() {
  useEffect(()=>{
    document.title ="Nikolas Gordon - Projects"
  });
  return (
    <div className="">
      <div className="d-flex flex-wrap container justify-content-around ">
          
          <div className="mt-4">
            <Card style={{ width: '18rem', height:'32rem' }}>
              <Card.Img variant="top" src={pic1} style={{ width: '18rem' }}/>
              <Card.Body>
                <Card.Title><p className="name">G-force Todo List</p></Card.Title>
                <Card.Text>
                  <p className="name">
                  A project that allows for users to generate lists that can be
                  shared and completed between users.
                  Use of vanilla JavaScript, JQuery, and PHP.
                  </p>
                </Card.Text>
                <a href="https://github.com/nikolasgordon/Gforcebitbucket" className="btn btn-secondary mt-auto"><p className="name mb-0">Repository</p></a>
              </Card.Body>
            </Card>
          </div>

          <div className="mt-4">
            <Card style={{ width: '18rem', height:'32rem'}}>
              <Card.Img variant="top" src={pic2} style={{ width: '10rem' }}/>
              <Card.Body>
                <Card.Title><p className="name">Dalhousie Youth Services Capstone Project</p></Card.Title>
                <Card.Text>
                  <p className="name">
                    Software engineering capstone. 
                    Added new report generating functionality to an existing 
                    system to improve client efficiency.
                    Use of React electron, node.js, and graph APIs such as Ant forms
                    Nivio Graphs.
                  </p>
                </Card.Text>
                <a href="https://github.com/Taran-Dorland/4000YProject" className="btn btn-secondary"><p className="name mb-0">Repository</p></a>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
  );
}

export default Projects;