
import './App.css';
import Name from './component/Header';
import Footer from './component/footerLinks';
import Breadcrum from './component/breadcrum';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="d-flex align-items-center flex-column">
      <Name/>
      <div className="custom-div overflow-hidden position-absolute mt-5">
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"}>
            <Home/>
          </Route>
          <Route path={process.env.PUBLIC_URL + "/About"}>
            <About/>
          </Route>
          <Route  path={process.env.PUBLIC_URL + "/Projects"}>
            <Projects/>
          </Route>
        </Switch>
      </div>
      <Breadcrum/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
