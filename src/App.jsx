import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './shared/Footer';
import Service from './components/Service';
import Product from './components/Product';
import Gallery from './components/Gallery';
import ScrollToTop from './components/ScrollToTop';
import Contact from './components/Contact';

function App() {

  return (
    <div className='scroll-smooth'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='service' element={<Service/>} />
          <Route path='product' element={<Product/>} />
          <Route path='gallery' element={<Gallery/>} />
          <Route path='contact' element={<Contact/>} />
        </Routes>
        <ScrollToTop />
        <Footer/>
      </Router>
    </div>
  )
}

export default App
