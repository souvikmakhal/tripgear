import React from "react";
import { Link } from "react-router-dom";

function Nav(){
  //  const cartcount = document.getElementById("cartcount");
  //  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  // cartcount.textContent = cart.length;

  //  const wishcount = document.getElementById("wishcount");
  //  const wishitem = JSON.parse(localStorage.getItem('wishitem')) || [];
  //  wishcount.textContent = wishitem.length;

  //  const wishcount = document.getElementById("wishcount");
   
   
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
        <Link className="nav-link" to="contact">Contact</Link>
      </li>
    </ul>
  </div>
  <div className="">
    <ul className="navbar-nav">
       <li className="nav-item">
        <Link className="nav-link" to="/"><i class="fa fa-user"></i></Link> 
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="wishlist"><i class="fal fa-heart"></i><span id="wishcount">0</span></Link>
      </li>
         <li className="nav-item">
        <Link className="nav-link" to="/"><i class="fal fa-shopping-bag"></i><span id="cartcount">0</span></Link>
      </li>
    </ul>
  </div>
</nav>
</div>
    )
}

export default Nav;