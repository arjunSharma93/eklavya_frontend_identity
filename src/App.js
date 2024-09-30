import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import RegisterForm from './components/register';
import LoginForm from './components/login';
import Home from './components/home';
import About from './components/about';
import PrivateRoutes from './components/PrivateRoutes'
//const PrivateRoutes = require('./components/PrivateRoutes');

function App() {
  return (
    <div className="App">
      <Router>
          <Nav>
            <Nav.Item>
              <Nav.Link><Link to=""> Home </Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/about"> About </Link></Nav.Link>
            </Nav.Item>
          </Nav>

          <Routes>
            <Route element={<PrivateRoutes/>}>
              <Route path="/" Component={Home}/>
              <Route path="/about" Component={About}/>
            </Route>
            <Route path="/register" Component={RegisterForm}/>
            <Route path="/login" Component={LoginForm}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
