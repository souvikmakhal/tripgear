import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { updateCounts } from "../Data/count";

function Nav(){
  //  const {cartCount, wishCount} = updateCounts();
  //  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  // const wishitem = JSON.parse(localStorage.getItem('wishlist')) || [];
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
 
  const updateCounts = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCartCount(cart.length);
    setWishCount(wishlist.length);
  };
 
  useEffect(() => {
    updateCounts();
 
    window.addEventListener("cartUpdated", updateCounts);
    window.addEventListener("wishUpdated", updateCounts);
 
    return () => {
      window.removeEventListener("cartUpdated", updateCounts);
      window.removeEventListener("wishUpdated", updateCounts);
    };
  }, []);

    return(
        <div className="container">
       <nav className="navbar navbar-expand-lg navbar-light">
  <Link className="navbar-brand" to="/"><img src='./images/logo.png' alt="logo"/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav m-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="shop">Shop now</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="blog">Blogs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="Faqpage">FAQ</Link>
      </li>
      <li className="nav-item"> 
        <Link className="nav-link" to="contactus">Contact</Link>
      </li>
    </ul>
  </div>
  <div className="">
    <ul className="navbar-nav">
       <li className="nav-item">
        <Link className="nav-link" to="/"><i class="fa fa-user"></i></Link> 
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="wishlist"><i class="fal fa-heart"></i><span>{wishCount}</span></Link>
      </li>
         <li className="nav-item">
        <Link className="nav-link" to="cart"><i class="fal fa-shopping-bag"></i><span>{cartCount}</span></Link>
      </li>
    </ul>
  </div>
</nav>
</div>
    )
}

export default Nav;