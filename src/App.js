import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />
          <Routes>
              <Route exact path="/" element={ <Home /> } />
              <Route path="/about" element={ <About/> } />
              <Route path="/projects" element={ <Projects/> } />
              <Route path="/contacts" element={ <Contacts/> } />
              <Route path="/resume" element={ <Resume/> } />
          </Routes>
    <Footer />    
    </BrowserRouter>
  );
}

export default App;
