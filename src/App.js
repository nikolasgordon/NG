
import './App.css';
import Name from './component/Header';
import Footer from './component/footerLinks';
import Breadcrum from './component/breadcrum';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import { HashRouter, Route, Switch} from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <HashRouter>
      <div className="d-flex align-items-center flex-column">
      <Name/>
      <div className="custom-div overflow-hidden position-absolute mt-5">
        <Switch>
            <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/About">
            <About/>
          </Route>
          <Route exact path="/Projects">
            <Projects/>
          </Route>
        </Switch>
      </div>
      <Breadcrum/>
      <Footer/>
    </div>
    </HashRouter>
  );
}

export default App;
