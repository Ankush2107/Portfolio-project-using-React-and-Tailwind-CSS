import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './components/Header';
import Footer from './components/footer';
import Contact from './pages/Contact/Contact';
function App() {

  return (
    <div className="App">
        <Router>
          <Header/>
            <Routes>
                <Route path='' element={<Home/>} />
                <Route path='about' element={<About/>} />
                <Route path='contact' element={<Contact/>} />
            </Routes>
          <Footer/>  
        </Router>
    </div>
  )
}

export default App
