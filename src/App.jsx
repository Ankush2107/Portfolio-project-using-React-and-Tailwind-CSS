import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './components/Header';
import Footer from './components/footer';
import Contact from './pages/Contact/Contact';
import Harley from './pages/Work/Harley/harley';
function App() {

  return (
    <div className="App">
        <Router>
          <ScrollToTop/>
            <Header/>
              <Routes>
                  <Route path='' element={<Home/>} />
                  <Route path='about' element={<About/>} />
                  <Route path='contact' element={<Contact/>} />
                  <Route path='/work/harley-davidson' element={<Harley/>} />
              </Routes>
            <Footer/>  
        </Router>
    </div>
  )
}

export default App
