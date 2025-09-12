import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Productdetails from './pages/Productdetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Faqpage from './pages/Faqpage';
import Blog from './pages/Blog';
import Wishlist from './pages/wishlist';

function App() {
  return (
<Router>
  <Nav/>
  <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/shop" element={<Shop />}/>
  <Route path="/Productdetails/:id" element={<Productdetails />}/>
  <Route path="/Cart" element={<Cart/>}/>
  <Route path="/Checkout" element={<Checkout/>}/>
  <Route path="/Faqpage" element={<Faqpage/>}/>
  <Route path="/Blog" element={<Blog/>}/>
  <Route path="/wishlist" element={<Wishlist/>}/>
  </Routes>
  <Footer/>
  </Router>
  );
}

export default App;
